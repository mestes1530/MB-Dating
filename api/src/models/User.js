const mongoose = require('mongoose');
const mongooseHidden = require('mongoose-hidden');
const ObjectId = mongoose.Schema.Types.ObjectId;

const userSchema = mongoose.Schema({
  username: String,
  passwordHash: {
    type: String,
    hideJSON: true
  },
  following: [ObjectId],
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
  }
});


const User = mongoose.model('User', userSchema);

module.exports = User;