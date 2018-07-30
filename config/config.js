module.exports = {
  port: process.env.PORT || 5000,
  db: process.env.DBURL || 'mongodb://localhost:27017/quilly',
  sessionSecret: process.env.SESSION_SECRET || 'change this',
  corsOptions: {
    origin: process.env.CLIENTURL || 'http://localhost:3000',
    credentials: true,
    optionsSuccessStatus: 200
  },
  stripe: {
    secretKey:
      process.env.STRIPE_SECRET_KEY || 'sk_test_QixOiUfMKS32WljW9ThkIi1e',
<<<<<<< HEAD
    defaultPlan: 'free',
=======
    defaultPlan: 'default',
>>>>>>> 5576659dc6971cf2a2aa85f6eb1adfc3ce115dbd
    plans: ['default'],
    planData: {
      default: {
        name: 'Default',
<<<<<<< HEAD
        price: 0
=======
        price: 4.99
>>>>>>> 5576659dc6971cf2a2aa85f6eb1adfc3ce115dbd
      }
    }
  }
};
