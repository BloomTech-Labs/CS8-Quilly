const express = require('express');
const router = express.Router();


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
        User.update( { _id: req.session.userId }, { $pull: { contributions: [contributionId] } });
        res.status(200).json(deletedContribution._id);
    })
    .catch(error => {
        res.status(500).json({error: 'Delete failed'});
    });
    // Delete the refrence in user.applicaions
    User
    .findOneAndUpdate(req.session.userId, { $pull: { 'Contributions': contributionId } })
    .catch(error => {
        res.status(500).json({error: 'Ref not deleted'});
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