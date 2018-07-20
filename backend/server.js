const express = require('express');
const helmet = require('helmet');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./models/userModel.js');
const dbConfig = require('./config/database.config');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session)

const redisConfig = require('./config/redis.config');

const userRouter = require('./routers/userRouter');

mongoose.connect(dbConfig.url, { useNewUrlParser: true })
    .then(() => console.log('Connected to DB'))
    .catch(() => console.error('Failed to connect to DB'));

const server = express();

// Use middleware
server.use(express.json());
server.use(helmet());

server.use(
    session({
        secret: require('./config/redis.config').secret,
        cookie: { maxAge: 1 * 24 * 60 * 60 * 1000 },
        secure: false,
        httpOnly: true,
        name: 'quilly-sessions',
        resave: true,
        saveUninitialized: false,
        store: new MongoStore({
            mongooseConnection: mongoose.connection,
            ttl: 1000 * 60 * 60 * 24 
        })
    })
)

server.get('/', (req, res) => {
    res.json({ api:'running' });
});

//use routers
server.use('/user', userRouter);

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`API running on port ${port}`));
