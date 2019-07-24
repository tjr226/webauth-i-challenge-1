const express = require('express');

const Users = require('./users-model.js');
const restricted = require('../auth/restricted.js');
const router = express.Router();

// restricted commented out for Day One work on ReactApp
router.get('/', restricted, (req, res) => {
// router.get('/', (req, res) => {
    Users.find()
        .then(users => {
            res.json(users);
        })
        .catch(err => res.send(err));
});

module.exports = router;