const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const session = require('express-session');

module.exports = server => {
    const sessionConfig = {
        name: 'monkey', // sid session ID
        secret: 'keep it secret, keep it safe',
        cookie: {
            maxAge: 1000 * 60 * 5, // in milliseconds
            secure: false, // limits to sending over https, needs to be true in production
            httpOnly: true, // denies access to JS
        },
        resave: false,
        saveUninitialized: false, // gpdr compliance
    }
    server.use(helmet());
    server.use(express.json());
    server.use(cors());
    server.use(session(sessionConfig))
}