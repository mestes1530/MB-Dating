const passport = require('passport');
const { Router } = require('express');

const Match = require('../models/Match');

const router = Router();

router.get('/', async (req, res) => {
    const matches = await Match.find();
    res.send(matches);
});

router.get('/:_id',
    passport.authenticate('jwt', {session: false}), 
    async (req, res) => {
        const { _id } = req.params;
        console.log(_id);
        //const matches = await Match.find();
        res.send(_id);
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

module.exports = router;
