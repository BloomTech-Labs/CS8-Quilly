const config = require('../config/config');
const express = require('express');
const router = express.Router();
const User = require('../models/userModel');
const StripeCustomer = require('../models/stripecustomer');

router.get('/', (req, res) => {
  const userId = req.session.userId; // The user id of the logged in user
  User.findById(userId)
    .populate({ path: 'billing' })
    .then(user => {
      console.log('hello this request was made!');
      res.status(200).send(user.billing);
    })
    .catch(error => {
      res.status(500).json({ error: 'Request could not be fulfilled', error });
    });
});

router.post('/charge', (req, res) => {
  // Create the customer
  // StripeCustomer.createCustomer((token) => {
  //   // Static plan
  //   let plan = 'plan_DIBFYLHH0MvZx3';
  //   // Assuming that the createCustomer returns a token that reporesents the customer id
  //   // We pass that token and plan to setPlan to save the plan
StripeCustomer.setPlan(plan, token, () => {
    console.log("Plan saved");
  });
  // });
});

/*router.post('/charge', (req, res) => {
  stripe.customers
    .create({
      // Need to send req.session.email from frontend - billing.js
      email: req.session.email,
      source: req.body.data
    })
    .then(customer => {
      console.log('CUSTOMER:', customer);
      stripe.subscriptions
        .create({
          customer: customer.id,
          // Need to change plan id accordingly
          plan: 'plan_DIBFYLHH0MvZx3'
        })
        .then(subscription => {
          // Checking to see if Subscription has been created
          res.status(200).send(subscription.id);
        })
        .catch(err => {
          console.log(err);
          res.status(500).json({ error: 'Request could not be fulfilled' });
        });
    })
    .catch(err => {
      console.log(err);
    });
});*/

module.exports = router;