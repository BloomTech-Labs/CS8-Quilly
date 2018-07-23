module.exports = {
  port: process.env.PORT || 5000,
  db: process.env.DBURL || 'mongodb://localhost:27017/quilly',
  sessionSecret: process.env.SESSION_SECRET || 'change this',
  stripe: {
    public_key: process.env.STRIPE_PUBLISHABLE_KEY || '',
    secret_key: process.env.STRIPE_SECRET_KEY || '',
  }
};
