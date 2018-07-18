const express = require('express');
const helmet = require('helmet');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./models/userModel.js');
const dbConfig = require('./config/database.config');

const userRouter = require('./routers/userRouter');

mongoose.connect(dbConfig.url, { useNewUrlParser: true })
    .then(() => console.log('Connected to DB'))
    .catch(() => console.error('Failed to connect to DB'));

const server = express();

// Use middleware
server.use(express.json());
server.use(helmet());

server.get('/', (req, res) => {
    res.json({api:'running'});
});

//use routers
server.use('/user', userRouter);

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`API running on port ${port}`));

