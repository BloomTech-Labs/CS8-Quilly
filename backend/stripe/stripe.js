const stripe = require('stripe')("pk_test_K1tJV1QhjRPnqQFwDFxe6vZd");
const express = require("express");
const router = express.Router();

router.post("/charge", function (req, res, next) {
  const stripeToken = req.body.stripeToken;

  stripe.charges.create({
    email: "asdf@gmail.com",
    source: stripeToken
  }, function (err, charge) {
    console.log('charge');
    console.log(charge)
    if (err) {
      res.send({
        success: false,
        message: 'Error'
      });
    } else {
      const { id } = customer;
      stripe.subscriptions.create({
        customer: id,
        items: [
          {
            plan: "plan_DIBFYLHH0MvZx3",
          },
        ],
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


    }
  });
})

