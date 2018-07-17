const express = require('express');
const helmet = require('helmet');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./users/userModel.js');
const dbConfig = require('./config/database.config');

const applicationRouter = require('./routers/applicationRouter.js');
const contributionsRouter = require('./routers/contributionsRouter');

mongoose.connect(dbConfig.url)
    .then(() => console.log('Connected to DB'))
    .catch(() => console.error('Failed to connect to DB'));

const server = express();

function authenticate(req, res, next) {
    //authenticate that the user is signed in
}

// Use middleware
server.use(express.json());
server.use(helmet());

server.get('/', (req, res) => {
    res.json()
});

// end point to register a new user
server.post('user/register', (req, res) => {
    
});

// end point to log in to the app
server.post('user/login', (req, res) => {
    
});

//end point to logout a user
server.get('user/logout', (req, res) => {
    
});

//enable authentication middleware for all routes that require a user be logged in
server.use(authenticate());

//use routers
server.use('/user/applications', applicationRouter);
server.use('/user/contributions', contributionRouter);
server.use('/user/meetups', meetupRouter);

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`API running on port ${port}`));

