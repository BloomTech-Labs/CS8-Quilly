const express = require('express');
const router = express.Router();


//end point for /contributions
//should return all contributions for logged in user
router.get('/', (req, res) => {

});

// end point to update a users constribution list
// this is used when a contribution is added or deleted from the user
router.put('/updateContributionsList', (req, res) => {
    
});

// This end point modifies a single contribution
router.put('/updateContribution/:id', (req, res) => {

});





module.exports = router;