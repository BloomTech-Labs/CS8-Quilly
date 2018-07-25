module.exports = {
  port: process.env.PORT || 5000,
  db: process.env.DBURL || 'mongodb://localhost:27017/quilly',
  sessionSecret: process.env.SESSION_SECRET || 'change this',
  corsOptions: {
<<<<<<< HEAD
    // origin: process.env.CLIENTURL || "http://localhost:3000",
    // optionsSuccessStatus: 200,
    origin:true,
    methods:['GET','POST','PUT','DELETE'],
    credentials: true
=======
    origin: process.env.CLIENTURL || "http://localhost:3000",
    credentials: true,
    optionsSuccessStatus: 200,
>>>>>>> 858805fb91e4e85793dc4dc5aa66dbb8c43f06fe
  },  
  stripe: {
    secret_key: process.env.STRIPE_SECRET_KEY || 'sk_test_QixOiUfMKS32WljW9ThkIi1e',
  }
};
