const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    username: {
      type: String, 
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      //email
    }, 
    thoughts: [
      {
        type: Schema.Types.ObjectId,
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Virtual friendCount

const User = model('user', userSchema);

module.exports = User;