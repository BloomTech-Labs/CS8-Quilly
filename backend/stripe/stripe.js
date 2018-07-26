// Need to add API key in line 2 from Stripe
const stripe = require('stripe')("sk_test_QixOiUfMKS32WljW9ThkIi1e");
const express = require("express");
const router = express.Router();
const User = require('../models/userModel');

router.get("/", (req, res) => {
  const userId = req.session.userId; // The user id of the logged in user
  User.findById(userId)
    .populate({ path: "billing" })
    .then(user => {
      console.log("hello this request was made!");
      res.status(200).send(user.billing);
    })
    .catch(error => {
      res.status(500).json({ error: "Request could not be fulfilled" });
    });
});

router.post("/charge", (req, res) => {
  stripe.customers.create({
    email: 'aa@aa.com',
    source: req.body.data
  }).then(customer => {
    stripe.subscriptions.create({
      customer: customer.id,
      plan: "plan_DIBFYLHH0MvZx3",
    }).then(subscription => {
      // Checking to see if Subscription has been created
      res.status(200).send(subscription.id);
    }).catch(err => {
      console.log(err);
      res.status(500).json({ error: "Request could not be fulfilled" });
    })
  }).catch(err => {
    console.log(err);
  });
})

module.exports = router;