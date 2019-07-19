const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const profileSchema = mongoose.Schema({
    user: {
        type: ObjectId,
        ref: 'User',
    },
    likes: {type: String, default: 'Likes test worked'},
    dislikes: {type: String, default: 'Dislikes test worked'},
}, {
    timestamps: true,
}
);

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;