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
    apiKey: process.env.STRIPE_KEY || 'sk_test_QixOiUfMKS32WljW9ThkIi1e',
    stripePubKey:
      process.env.STRIPE_PUB_KEY  || 'pk_test_K1tJV1QhjRPnqQFwDFxe6vZd',
    defaultPlan: 'default',
    plans: ['default'],
    planData: {
      default: {
        name: 'Default',
        price: 4.99
      }
    }
  }
};
