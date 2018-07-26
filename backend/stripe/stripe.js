const stripe = require('stripe')("sk_live_XgC9ppdTgqWGIoCzpftnko0a");
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

router.post("/charge", function (req, res) {
  stripe.customers.create({
    email: 'aa@aa.com'
  }).then(function (customer) {
    console.log("TRYING TO FIND SOMETHING: ", req.body);
    return stripe.customers.createSource(customer.id, {
      source: customer.id
    });
  }).then(function (source) {
    return stripe.charges.create({
      amount: 1600,
      currency: 'usd',
      customer: source
    }, function (err, charge) {
      // console.log('source: ', source);
      if (err) {
        console.log("ERROR MESSAGE IN CHARGES: ", err);
        res.send({
          success: false,
          message: 'Error'
        });
      } else {
        // const { id } = customer;
        stripe.subscriptions.create({
          // customer: source,
          items: [
            {
              plan: "plan_DIBFYLHH0MvZx3",
            },
          ],
        }, function (err, subscription) {
          // console.log("ERROR MESSAGE IN SUB: ", err);
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
      }
    })
  })
});

module.exports = router;
