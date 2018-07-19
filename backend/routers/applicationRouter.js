const express = require('express');
const router = express.Router();
const Application = require('../models/applicationModel');
const User = require('../models/userModel');

//end point for /user/applications/
//should return all applications for logged in user
router.get('/', (req, res) => {
    const userId = req.session.userId; // The user id of the logged in user
    User
    .findById(userId)
    .populate({path: 'applications'})
    .then(user => {
        res.status(200).send(user.applications);
    })
    .catch(error => {
        res.status(500).json({error: 'Request could not be fulfilled.'});

    })
});

// This endpoint gets the list of refs from user.applications(for testing purposes)
router.get('/refs', (req, res) => {
    const userId = req.session.userId; // The user id of the logged in user
    User
    .findById(userId)
    //.populate({path: 'applications'})
    .then(user => {
        res.status(200).send(user.applications);
    })
    .catch(error => {
        res.status(500).json({error: 'Request could not be fulfilled.'});

    })
});

// end point for adding an application to user
router.post('/add', (req, res) => {
    const userId = req.session.userId;
    const newApplication = new Application(req.body);
    newApplication
    .save(function(error){
        if (error)
            res.status(500).json({error: 'Application creation failed'});
    });

    User
    .findById(userId)
    .then(user => {
        user.applications.push(newApplication);
        user
        .save()
        .then(savedUser => {
            res.status(200).json(savedUser);
        })
        .catch(error => {
            res.status(500).json({error: 'Failed to save the document.'});
        });
    })
    .catch(error => {
        res.status(500).json(error);
    });
});

//end point for deleting an applications
router.delete('/delete/:applicationId', (req, res) => {
    const { applicationId } = req.params;

    // Delete the actual application
    Application
    .findByIdAndDelete(applicationId)
    .then(deletedApplication => {
        User.update( { _id: req.session.userId }, { $pull: { applications: [applicationId] } });
        res.status(200).json(deletedApplication._id);
    })
    .catch(error => {
        res.status(500).json({error: 'Delete failed'});
    });
    // Delete the refrence in user.applicaions
    User
    .findOneAndUpdate(req.session.userId, { $pull: { 'applications': applicationId } })
    .catch(error => {
        res.status(500).json({error: 'Ref not deleted'});
    });
});

// This end point modifies a single application
router.put('/update/:applicationId', (req, res) => {
    const { applicationId } = req.params;
    Application
    .findByIdAndUpdate(applicationId, { ...req.body })
    .then(response => {
        res.status(200).json(response);
    })
    .catch(error => {
        res.status(500).json({error: "Failed to update"});
    });
});

module.exports = router;