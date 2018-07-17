const express = require('express');
const router = express.Router();


//end point for /user/applications/
//should return all applications for logged in user
router.get('/', (req, res) => {

});

// end point for adding an application to user
router.post('/add', (req, res) => {

});

//end point for deleting an applications
router.delete('/delete', (req, res) => {

});

// This end point modifies a single application
router.put('/update/:id', (req, res) => {

});

module.exports = router;