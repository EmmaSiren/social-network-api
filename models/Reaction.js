const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      max_length: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => new Date().toLocaleDateString(timestamp, {month: "short", day: "numeric", year: "numeric", hour: "numeric", minute: "numeric"})
    },
  },
  {
    toJSON: {
      getters: true
    },
    id: false,
  }
);

module.exports = reactionSchema;