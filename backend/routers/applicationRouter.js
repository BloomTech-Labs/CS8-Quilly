const express = require('express');
const router = express.Router();
//const applicaitonSchema = require('../models/applicationModel');

//end point for /user/applications/
//should return all applications for logged in user
router.get('/', (req, res) => {
    User
    .findById(req.session.userId)
    .then(user => {
        res.status(200).json(user.applications);
    })
    .catch(error => {
        res.status(500).json({error: 'Request could not be fulfilled.'});

    })
});

// end point for adding an application to user
router.post('/add', (req, res) => {
//     const { applicationData } = req.body;
//     const new Application(applicationData);
//     User
//     .findById(req.session.userId)
//     .then(user => {
//         user.application.push(newApplication);

//     })
});

//end point for deleting an applications
router.delete('/delete', (req, res) => {

});

// This end point modifies a single application
router.put('/update/:id', (req, res) => {

});

module.exports = router;