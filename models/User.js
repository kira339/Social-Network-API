const { Schema, model } = require('mongoose');
// const thoughtSchema = require('./Thought');

// Schema to create Student model
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
        unique: true,
        required: true,
        trim: true,
    },
    thoughts: [{
      type: Schema.Types.ObjectId,
      ref: "Thought"
    }],

  
        friends: [{
            type: Schema.Types.ObjectId,
            ref: "User"

        }]
    },
    
  {
    toJSON: {
      getters: true,
    },
  }
);

const User = model('User', userSchema);

module.exports = User;
