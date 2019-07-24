const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const matchSchema = mongoose.Schema({
    userOne: {
        type: ObjectId,
        ref: 'User',
    },
    userTwo: {
        type: ObjectId,
        ref: 'User',
    },
    //sameTraitScore: Number,
    //compatability: String,
},  {
    timestamps: true,
});

const Match = mongoose.model('Match', matchSchema);

module.exports = Match;