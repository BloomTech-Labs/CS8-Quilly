const express = require('express');
const router = express.Router();

const applicationRouter = require('./applicationRouter.js');
const contributionRouter = require('./contributionsRouter');
const meetupRouter = require('./meetupsRouter');

function authenticate(req, res, next) {
    //authenticate that the user is signed in
    console.log('authenticating');
    next();
}

// end point to register a new user
router.post('/register', (req, res) => {
    console.log('register');
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