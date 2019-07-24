const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const userSchema = mongoose.Schema({
  username: String,
  // age: Number,
  // gender: String,
  personality: {type: String, default: ''},
  passwordHash: {
    type: String,
    hideJSON: true
  },
  following: [ObjectId],
  location: {
    coordinates: [],
   },
}, 
{
  timestamps: true,
  toJSON: {
    virtuals: true,
  }
});

userSchema.virtual('profile', {
  ref: "Profile",
  localField: "_id",
  foreignField: "user",
  justOne: true
})

// Added for location
userSchema.index({location: "2dsphere"});
const User = mongoose.model('User', userSchema);

module.exports = User;