const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;
const saltRounds = 10;

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
  applications: [{type: Schema.Types.ObjectId, ref: 'Application'}],
  meetups: [{type: Schema.Types.ObjectId, ref: 'Meetup'}],
  contributions: [{type: Schema.Types.ObjectId, ref: 'Contribution'}],
},
  {
    timestamps: true
});

// password hashing
userSchema.pre('save', function(next) {

  if (this.password && this.isModified('password')) {
    bcrypt.hash(this.password, saltRounds)
    .then(hash => {
      this.password = hash;
      next();
    })
    .catch(err => {
      return next(err);
    });
  } else next();

});

// authentication method
userSchema.methods.isPasswordValid = function(passwordGuess) {
  return bcrypt.compare(passwordGuess, this.password);
}

module.exports = mongoose.model('User', userSchema);