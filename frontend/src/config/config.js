module.exports = {
  port: process.env.PORT || 3000,
  serverUrl: process.env.SERVERURL || "http://localhost:5000",
  stripe: {
    publicKey: process.env.STRIPE_PUBLIC_KEY || "pk_test_K1tJV1QhjRPnqQFwDFxe6vZd",
  },
};
