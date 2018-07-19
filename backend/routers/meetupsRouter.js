const express = require('express');
const router = express.Router();

const User = require('../models/userModel');
const Meetup = require('../models/meetupModel');

//end points for 'user/meetups'
//should return all meetups for logged in user
router.get('/', (req, res) => {
    const userId = req.session.userId; // The user id of the logged in user
    User
    .findById(userId)
    .populate({path: 'meetups'})
    .then(user => {
        res.status(200).send(user.meetups);
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
        res.status(200).send(user.meetups);
    })
    .catch(error => {
        res.status(500).json({error: 'Request could not be fulfilled.'});

    })
});

// End point for retrieving a single meetup by id
router.get('/:meetupId', (req, res) => {
    const { meetupId } = req.params;
    Meetup
    .findById(meetupId)
    .then(meetup => {
        res.status(200).json(meetup);
    })
    .catch(error => {
        res.status(500).json({error: 'meetup could not be retrieved'})
    })

});

// end point to add a meetup to a user
router.post('/add', (req, res) => {
    const userId = req.session.userId;
    const newMeetup = new Meetup(req.body);
    newMeetup
    .save(function(error){
        if (error)
            res.status(500).json({error: 'Meetup creation failed'});
    });

    User
    .findById(userId)
    .then(user => {
        user.meetups.push(newMeetup);
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

//end point to delete a meetup
router.delete('/delete/:meetupId', (req, res) => {
    const { meetupId } = req.params;

    // Delete the actual Meetup
    Meetup
    .findByIdAndDelete(meetupId)
    .then(deletedMeetup => {
        User
        .findOneAndUpdate({_id: req.session.userId}, { $pull: { meetups: meetupId } })
        .then(response => {
            res.status(200).json(deletedMeetup._id);
        })
        .catch(error => {
            res.status(500).json({error: 'Ref not deleted'});
        });
    })
    .catch(error => {
        res.status(500).json({error: 'Delete failed'});
    });
});

// This end point modifies a single meetup
router.put('/update/:meetupId', (req, res) => {
    const { meetupId } = req.params;
    Meetup
    .findByIdAndUpdate(meetupId, { ...req.body })
    .then(response => {
        res.status(200).json(response);
    })
    .catch(error => {
        res.status(500).json({error: "Failed to update"});
    });
});

module.exports = router;