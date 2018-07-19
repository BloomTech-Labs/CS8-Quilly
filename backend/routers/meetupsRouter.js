const express = require('express');
const router = express.Router();


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
        User.update( { _id: req.session.userId }, { $pull: { meetups: [meetupId] } });
        res.status(200).json(deletedMeetup._id);
    })
    .catch(error => {
        res.status(500).json({error: 'Delete failed'});
    });
    // Delete the refrence in user.applicaions
    User
    .findOneAndUpdate(req.session.userId, { $pull: { 'meetups': meetupId } })
    .catch(error => {
        res.status(500).json({error: 'Ref not deleted'});
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