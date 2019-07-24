const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const profileSchema = mongoose.Schema({
    user: {
        type: ObjectId,
        ref: 'User',
    },
    likes: {type: String, default: 'Things the user likes.'},
    dislikes: {type: String, default: 'Things the user dislikes.'},
}, {
    timestamps: true,
}
);

profileSchema.virtual('matches', {
    ref: 'Match',
    localField: '_id',
    foreignField: 'userOne',
    justOne: false,
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;