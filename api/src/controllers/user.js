const passport = require('passport');
const { Router } = require('express');

const User = require('../models/User');

const router = Router();

router.get('/', async (req, res) => {
    const users = await User.find();
    res.send(users);
});

router.get('/profile',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const user = await User.findOne({_id: req.user._id}).populate('profile');
    res.send(user.profile);
  }
);

router.patch('/profile',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    req.user.set({
      ...req.body,
      passwordHash: undefined,
    });
    await req.user.save();
    res.send(req.user);
  }
);

router.post('/follow/:_id', 
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const { _id } = req.params;
    const followedUser = await User.findOne({ _id });
    if(followedUser) {
      req.user.following.push(followedUser._id);
      await req.user.save();
      res.sendStatus(200)
    } else {
      res.sendStatus(404)
    }
});

router.get('/:_id', async (req, res) => {
  const { _id } = req.params;
  const user = await User.findOne({ _id });
  if(user) {
    res.send(user);
  } else {
    res.sendStatus(404);
  }
});


module.exports = router;