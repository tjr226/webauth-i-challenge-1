const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

const usersRouter = require('../users/users-router.js');
const authRouter = require('../auth/auth-router.js');
const restrictedRouter = require('../auth/restricted-router.js');
const restricted = require('../auth/restricted.js');

server.use('/api/users', usersRouter);
server.use('/api/auth', authRouter);
server.use('/api/restricted', restricted, restrictedRouter);

server.get('/', (req, res) => {
    res.send("API working");
});

module.exports = server;