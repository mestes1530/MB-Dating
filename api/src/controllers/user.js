const passport = require('passport');
const { Router } = require('express');

const User = require('../models/User');
const Match = require('../models/Match');


const router = Router();

router.get('/', async (req, res) => {
    const users = await User.find();
    res.send(users);
});

router.get('/profile',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const user = await User.findOne({_id: req.user._id}).populate({
      path: 'profile',
    });
    const matches = await Match.find({userOne: user._id});
    res.send({user, matches});
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


// Seach function that filters users based on conditions
router.post('/search/:type', 
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const type = req.params.type;
    const results = await User.find({
      personality: type,
    })
    res.send(results);
  }
);

// Find users within 1000 meters of signing in user (WORKING)
router.get('/near', 
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const [lng, lat] = [req.query.lng || 0, req.query.lat || 0]

    const results = await User.find({
      location: {
       $near: {
        $maxDistance: 1000,
        $geometry: {
         type: "Point",
         coordinates: [lng, lat]
        }
       }
      }
     })
     res.send(results);
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