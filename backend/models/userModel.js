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
  stripe: {
    // stripe.email is independent from the users email
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    // subscription checks if the user has an active subscription that has been purchased
    subscription: {
      type: boolean,
      default: false
    },
    cards: {
      // active dependent on the validity of the card selected for the stripe user
      active: {
        type: boolean
      },
      // cardsonfile will be in array form and will populate accordingly
      cardsonfile: {
        type: Object,
        default: []
      }
    }
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
