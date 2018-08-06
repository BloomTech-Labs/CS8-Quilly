module.exports = {
  port: 3000,
  serverUrl: process.env.NODE_ENV === "production" ? "https://zealous-meninsky-729b3f.netlify.com" : "http://localhost:5000",
  stripe: {
    publicKey: process.env.NODE_ENV === "production" ? "pk_live_rkM9rtRZKBLaFRUTHUX3W71X" : "pk_test_K1tJV1QhjRPnqQFwDFxe6vZd",
  },
};
