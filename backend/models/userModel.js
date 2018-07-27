const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    index: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  stripeemail: {
    type: email,
    unique: true,
    lowercase: true,
  },
  issubscribed: {
    type: boolean,
    default: false,
    // required: true,
  },
  applications: [{ type: Schema.Types.ObjectId, ref: 'Application' }],
  meetups: [{ type: Schema.Types.ObjectId, ref: 'Meetup' }],
  contributions: [{ type: Schema.Types.ObjectId, ref: 'Contribution' }],
},
  {
    timestamps: true
  }
);

// Password hashing
userSchema.pre('save', function (next) {
  bcrypt.hash(this.password, 10)
    .then(hash => {
      this.password = hash;
      next();
    })
    .catch(err => {
      return next(err);
    });
});

// Authentication method
userSchema.methods.isPasswordValid = function (passwordGuess) {
  return bcrypt.compare(passwordGuess, this.password);
}

module.exports = mongoose.model('User', userSchema);
