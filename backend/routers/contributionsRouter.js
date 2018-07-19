const express = require('express');
const router = express.Router();

const User = require('../models/userModel');
const Contribution = require('../models/contributionModel');

//end points for '/user/contributions'
//should return all meetups for logged in user
router.get('/', (req, res) => {
    const userId = req.session.userId; // The user id of the logged in user
    User
    .findById(userId)
    .populate({path: 'contributions'})
    .then(user => {
        res.status(200).send(user.contributions);
    })
    .catch(error => {
        res.status(500).json({error: 'Request could not be fulfilled.'});

    })
});
router.get('/refs', (req, res) => {
    const userId = req.session.userId; // The user id of the logged in user
    User
    .findById(userId)
    .then(user => {
        res.status(200).send(user.contributions);
    })
    .catch(error => {
        res.status(500).json({error: 'Request could not be fulfilled.'});

    })
});

// End point for retrieving a single contribution by id
router.get('/:contributionId', (req, res) => {
    const { contributionId } = req.params;
    Contribution
    .findById(contributionId)
    .then(contribution => {
        res.status(200).json(contribution);
    })
    .catch(error => {
        res.status(500).json({error: 'Contribution could not be retrieved'})
    })

});

// end point to add a contribution to a user
router.post('/add', (req, res) => {
    const userId = req.session.userId;
    const newContribution = new Contribution(req.body);
    newContribution
    .save(function(error){
        if (error)
            res.status(500).json({error: 'Contribution creation failed'});
    });

    User
    .findById(userId)
    .then(user => {
        user.contributions.push(newContribution);
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

//end point to delete a contribution
router.delete('/delete/:contributionId', (req, res) => {
    const { contributionId } = req.params;

    // Delete the actual Contribution
    Contribution
    .findByIdAndDelete(contributionId)
    .then(deletedContribution => {
        //Delete the refrence in user.applicaions
        User
        .findOneAndUpdate({_id: req.session.userId}, { $pull: { contributions: contributionId } })
        .then(response => {
            res.status(200).json(deletedContribution._id);
        })
        .catch(error => {
            res.status(500).json({error: 'Ref not deleted'});
        });
    })
    .catch(error => {
        res.status(500).json({error: 'Delete failed'});
    });
});

// This end point modifies a single contribution
router.put('/update/:contributionId', (req, res) => {
    const { contributionId } = req.params;
    Contribution
    .findByIdAndUpdate(contributionId, { ...req.body })
    .then(response => {
        res.status(200).json(response);
    })
    .catch(error => {
        res.status(500).json({error: "Failed to update"});
    });
});

module.exports = router;