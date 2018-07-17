const express = require('express');
const router = express.Router();


//end points for '/meetups'
//should return all meetups for logged in user
router.get('/', (req, res) => {

});

// end point to update a users meetups list
// this is used when a meetup is added or deleted from the user
router.put('/updateMeetupsList', (req, res) => {
    
});

// This end point modifies a single meetup
router.put('/updateMeetup/:id', (req, res) => {

});





module.exports = router;