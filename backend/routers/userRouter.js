const express = require('express');
const router = express.Router();

const applicationRouter = require('./applicationRouter');
const contributionRouter = require('./contributionsRouter');
const meetupRouter = require('./meetupsRouter');

const User = require('../models/userModel');

//authenticate that the user is signed in
function authenticate(req, res, next) {
//     if (req.session && req.session.userId)
//     next();
// else
//     res.json({ msg:'You must be logged in to do this function.' })
next();
}

// end point to register a new user
router.post('/register', (req, res) => {
    const { username } = req.body;
    User
    .findOne({ username })
    .then(response => {
        if (response) {
            res.status(422).json({error: 'User name already exists'});
        } else {
            const user = new User(req.body)
            user
            .save()
            .then(newUser => {
                res.json(newUser);
            })
            .catch(err => {
                res.status(500).json({error: 'New user could not be created.'});
            });
        }
    })
    .catch(error => {
        res.status(500).json({error: 'New user could not be created.'});
    }) 
});

// end point to log in to the app
router.post('/login', (req, res) => {
    
});

//end point to logout a user
router.get('/logout', (req, res) => {
    console.log('logout');
});

// end point to delete a user
router.delete('/delete/:id', (req, res) => {

});

router.use('/applications', authenticate, applicationRouter);
router.use('/contributions', authenticate, contributionRouter);
router.use('/meetups', authenticate, meetupRouter);

module.exports = router;