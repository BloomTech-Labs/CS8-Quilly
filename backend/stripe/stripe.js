const stripe = require('stripe')("sk_test_QixOiUfMKS32WljW9ThkIi1e");
//pk_live_rkM9rtRZKBLaFRUTHUX3W71X
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

// router.post("/charge", function (req, res, next) {
//   const token = req.body.token.id; // Retrieving token id
//   stripe.charges.create({
//     email: "aa@aa.com",
//     source: token
//   }, function (err, charge) {
//     console.log('charge: ', charge);
//     if (err) {
//       res.send({
//         success: false,
//         message: 'Error'
//       });
//     } else {
//       const { id } = customer;
//       stripe.subscriptions.create({
//         customer: id,
//         items: [
//           {
//             plan: "plan_DIBFYLHH0MvZx3",
//           },
//         ],
//       }, function (err, subscription) {
//         if (err) {
//           res.send({
//             success: false,
//             message: 'Error'
//           });
//         } else {
//           res.send({
//             success: true,
//             message: 'Success'
//           });
//         }
//       });
//     }
//   });
// })


/*router.post("/charge", function (req, res, next) {
  const token = req.body.token.id; // Retrieving token id
  // const { id } = token;
  console.log(token);
  stripe.subscriptions.create({
    customer: token,
    plan: "plan_DIBFYLHH0MvZx3",
  }, function (err, subscription) {
    if (err) {
      res.send({
        success: false,
        message: 'Error'
      });
    } else {
      res.send({
        success: true,
        message: 'Success'
      });
    }
  });
})*/

router.post("/charge", (req, res) => {
  stripe.customers.create({
    email: 'aa@aa.com',
    source: req.body.data
  }).then(customer => {
    stripe.subscriptions.create({
      customer: customer.id,
      plan: "plan_DIBFYLHH0MvZx3",
    }).then(subscription => {
      console.log("SUBSCRIPTION", subscription);
    }).catch(err => {
      console.log(err);
    })
  }).catch(err => {
    console.log(err);
  });
})

module.exports = router;

/*(err, subscription) => {
        if (err) {
      res.send({
        success: false,
        message: 'Error'
      });
    } else {
      res.send({
        success: true,
        message: 'Success'
      });
    }
  })

    .then(function (customer) {
      console.log("TRYING TO FIND SOMETHING: ", req.body);
      return stripe.customers.createSource(customer.id, {
        source: customer.id
      });
    })
    .then(function (customer) {
      // console.log("THIS IS LOOKING FOR STUFF:", req);
      return stripe.customers.createSource(customer.id, {
        source: req.body.data
      });
    })
    .then(function (source) {
      return stripe.charges.create({
        amount: 1600,
        currency: 'usd'
        // customer: source
      }, function (err, charge) {
        // console.log('source: ', source);
        if (err) {
          console.log("ERROR MESSAGE IN CHARGES: ", err);
          res.send({
            success: false,
            message: 'Error'
          });
        } else {
          // const { id } = customer;*/