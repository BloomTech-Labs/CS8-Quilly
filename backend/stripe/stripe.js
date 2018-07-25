const stripe = require('stripe')("pk_test_K1tJV1QhjRPnqQFwDFxe6vZd");
const express = require("express");
const router = express.Router();

router.get("/charge", function (req, res, next) {
  const stripeToken = req.body.stripeToken;

  stripe.charges.create({
    amount: 499,
    currency: "usd",
    description: "Professional planning services",
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
      res.send({
        success: true,
        message: 'Success'
      });
    }
  });
})