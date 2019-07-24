const express = require('express');
const server = express();
const setupGlobalMiddleware = require('./setup-middleware.js');

// routes
const usersRouter = require('../users/users-router.js');
const authRouter = require('../auth/auth-router.js');
const restrictedRouter = require('../auth/restricted-router.js');

// middleware
const restricted = require('../auth/restricted.js');
// how to apply it globally
// server.use(restricted())
setupGlobalMiddleware(server);

server.use('/api/users', usersRouter);
server.use('/api/auth', authRouter);

// global middleware applied
server.use('/api/restricted', restricted, restrictedRouter);

server.get('/', (req, res) => {
    res.send("API working");
});

module.exports = server;