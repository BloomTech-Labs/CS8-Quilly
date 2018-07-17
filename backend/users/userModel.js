const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const applicationSchema = new mongoose.Schema({
  company: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  },
  submitted: {
    type: Boolean,
    default: false
  },
  onsiteInterview: {
    type: Boolean,
    default: false
  }
  receivedResponse: {
    type: Boolean,
    default: false
  }
  whiteboard: {
    type: Boolean,
    default: false
  }
  phoneInterview: {
    type: Boolean,
    default: false
  }
  codeTest: {
    type: Boolean,
    default: false
  },
  rejection: {
    type: Boolean,
    default: false
  }
  offer: {
    type: Boolean,
    default: false
  },
  open: {
    type: Boolean,
    default: true
  },
  status: {
    type: String,
    default: 'wishlist'
  },
  notes: String,
  jobSource: String,
  linkToJobPost: String,
  pointOfContact: String,
  timestamps: true,
  testData: {
    type: Boolean,
    default: false
  }
});

const meetupSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  activity: {
    type: String,
    required: true,
  },
  link: String,
  notes: String,
});

const contributionSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  contribution: {
    type: String,
    required: true,
  },
  link: String,
  notes: String,
});

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
  phone: {
    type: Number,
  },
  timestamps: true,
  applications: [Application],
  meetups: [Meetup],
  contributions: [Contribution],
});

// Password hashing
userSchema.pre('save', function(next) {
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
userSchema.methods.isPasswordValid = function(passwordGuess) {
  return bcrypt.compare(passwordGuess, this.password);
}

module.exports = mongoose.model('User', userSchema);
