const passport = require('passport');
const { Router } = require('express');

const Match = require('../models/Match');
const User = require('../models/User');

const router = Router();

router.get('/:_id',
    passport.authenticate('jwt', {session: false}), 
    async (req, res) => {
        const { _id } = req.params;
        // console.log(_id);
        try {
            const match = await Match.findOne({_id});
            res.send(match);
        } catch(e) {
            res.send(404);
        }
});



router.post('/',
    passport.authenticate('jwt', {session: false}),
    async (req, res) => {
        const match = new Match({
            ...req.body,
        });
        try {
            await match.save();
            res.send(match);
        } catch(e) {
            console.error(e);
            res.sendStatus(500);
        }
});


// New function that finds matches w/ specific personality types
router.get('/search/:type', 
    passport.authenticate('jwt', {session: false}),
    async (req, res) => {
        const {type} = req.params;

        console.log(type, req.user)
        const users = await User.find({
            personality: type
        })
        res.send(users);
});

module.exports = router;
