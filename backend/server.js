const express = require('express');
const helmet = require('helmet');
const mongoose = require('mongoose');
const cors = require('cors');
const dbConfig = require('./config/database.config')

mongoose.connect(dbConfig.url)
  .then(() => console.log('Connected to DB.'))
  .catch((err) => console.error('Connection to DB failed.'));

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
  res.status(200).json({ api: 'Up and running' });
});

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`API working on port: ${port}`));
