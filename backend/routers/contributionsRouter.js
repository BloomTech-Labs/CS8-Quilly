const express = require('express');
const router = express.Router();


//end points for '/user/contributions'
//should return all meetups for logged in user
router.get('/', (req, res) => {

});

// end point to add a contribution to a user
router.post('/add', (req, res) => {
    
});

//end point to delete a contribution
router.delete('/delete/:id', (req, res) => {

});

// This end point modifies a single contribution
router.put('/updateMeetup/:id', (req, res) => {

});

module.exports = router;