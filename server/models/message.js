const mongoose = require('mongoose');
const User = require('./user');

const messageSchema = mongoose.Schema(
  {
    text: {
      type: String,
      require: true,
      maxLength: 160
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  {
    timestamps: true
  }
);

messageSchema.pre('remove', async function(next) {
  try {
    let user = await User.findById(this.user);
    console.log(user);
    user.message.deleteOne(this.id);
    await user.save();
    return next();
  } catch (err) {
    return next(err);
  }
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
