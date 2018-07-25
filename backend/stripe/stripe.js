const stripe = require('stripe')(process.env.STRIPE_SECRET);

module.exports = (req) => {
  const token = req.body.stripeToken;

  return stripe.charges.create({
    amount: parseInt(process.env.STRIPE_COST, 10),
    currency: process.env.STRIPE_CCY,
    source: token,
    description: 'Subscription',
    metadata: {}, // Holds 
  });
}