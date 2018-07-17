const express = require('express');
const router = express.Router();


//end points for 'user/meetups'
//should return all meetups for logged in user
router.get('/', (req, res) => {

});

// end point to add a meetup to a user
router.post('/add', (req, res) => {
    
});

//end point to delete a meetup
router.delete('/delete/:id', (req, res) => {

});

// This end point modifies a single meetup
router.put('/updateMeetup/:id', (req, res) => {

});

module.exports = router;