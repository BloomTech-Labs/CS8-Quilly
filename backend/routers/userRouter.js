const express = require('express');
const router = express.Router();

const applicationRouter = require('./applicationRouter');
const contributionRouter = require('./contributionsRouter');
const meetupRouter = require('./meetupsRouter');

const User = require('../models/userModel');

// Authenticate that the user is signed in
function authenticate(req, res, next) {
    if (req.session && req.session.userId)
    next();
else
    res.json({ message:'You must be logged in to do this function' })
}

// end point that returns user data if logged in
router.get('/', authenticate, (req, res) => {
  User
  .findById(req.session.userId)
  .then(user => {
    res.status(200).json(user);
  })
  .catch(error => {
    res.status(500).json({error: "Could not retrieve user information"})
  })
})

// end point to register a new user
router.post('/register', (req, res) => {
    const { username, password, email, firstname, lastname } = req.body;
    if (!username || !password || !email || !firstname || !lastname) {
      res.status(422).json({ error: 'All required fields must be filled with valid data' });
    }
    User
    .findOne({ username })
    .then(response => {
        if (!response) {
            const user = new User(req.body)
            user.save()
            .then(newUser => {
              res.status(201).json(newUser);
            })
            .catch(err => {
              res.status(500).json({ error: 'New user could not be created' });
            });
        } else {
            res.status(422).json({ error: 'User already exists' });
        }
    })
    .catch(err => {
      res.status(500).json({ error: 'New user could not be created' });
    })
});

// end point to log in to the app
router.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) res.status(422).json({ error: 'Invalid credentials' });

    User
    .findOne({ username })
    .then(user => {
      if (user) {
        user
        .isPasswordValid(password)
        .then(result => {
          if (result) {
            req.session.username = username;
            req.session.userId = user._id;
            res.status(200).json({ success: 'Login successful' });
          } else {
            res.status(422).json({ error: 'Invalid credentials' });
          }
        })
        .catch(err => {
          res.status(500).json({ error: 'Error in user validation' });
        });
      } else {
        res.status(422).json({ error: 'User not found' });
      }
    })
    .catch(err => {
      res.status(500).json({ error: 'Database error' });
    })
});

// end point to logout a user
router.get('/logout', (req, res) => {
    if (req.session) {
      req.session.destroy((err) => {
        if (err) res.status(500).json({ error: 'Error logging out' });
        else res.status(200).json({ success: 'Successfully logged out' });
      });
    }
    else res.send({ message: 'Not logged in' });
});

// end point to delete a user
router.delete('/delete', authenticate, (req, res) => {
    const { userId } = req.session;
    if (!userId) res.status(500).json({ error: 'Invalid session' });
    User
    .findByIdAndRemove({ _id: userId })
    .then(removed => {
      if (removed) {
        res.status(200).json({ success: 'User has been deleted' });
      } else {
        res.status(500).json({ error: 'User does not exist'});
      }
    })
});

// end point to update users data
router.put('/update', authenticate, (req, res) => {
  const newData = req.body;
  const { userId } = req.session;
  User
  .findByIdAndUpdate(userId, newData)
  .then(response => {
    res.status(200).json(response);
  })
  .catch(error => {
    res.status(500).json({error: 'User information could not be updated'});
  });
})

router.use('/applications', authenticate, applicationRouter);
router.use('/contributions', authenticate, contributionRouter);
router.use('/meetups', authenticate, meetupRouter);

module.exports = router;
