const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const session = require('express-session');
const KnexSessionStore = require('connect-session-knex')(session); // remember to add (session)

module.exports = server => {
    const sessionConfig = {
        name: 'monkey', // sid session ID
        secret: process.env.SESSION_SECRET || 'keep it secret, keep it safe',
        cookie: {
            maxAge: 1000 * 60 * 5, // in milliseconds
            secure: false, // limits to sending over https, needs to be true in production
            httpOnly: true, // denies access to JS
        },
        resave: false,
        saveUninitialized: false, // gpdr compliance
        store: new KnexSessionStore({ // remember to add NEW here
            knex: require('../database/dbConfig.js'),
            tablename: 'sessions',
            createtable: true,
            sidfieldname: 'sid',
            clearInterval: 1000 * 60 * 60, // deletes expired session data every hour
            
        })
    }
    server.use(helmet());
    server.use(express.json());
    server.use(cors());
    server.use(session(sessionConfig))
}