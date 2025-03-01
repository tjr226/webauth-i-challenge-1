const express = require('express');
const bcrypt = require('bcryptjs');

const Users = require('../users/users-model.js');
const router = express.Router();

router.post('/register', (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 8);
    user.password = hash;

    Users.add(user)
        .then(saved => {
            res.status(201).json(saved);
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

router.post('/login', (req, res) => {
    let { username, password } = req.body;

    Users.findBy({ username })
        .first()
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                req.session.username = user.username;
                res.status(200).json({ message: `Welcome ${user.username}`});
            } else {
                res.status(401).json({ message: 'You shall not pass!' });
            }
        })
        .catch(error => {
            res.status(500).json(error);
        })
})

router.get('/logout', (req, res) => {
    if (req.session) {
        req.session.destroy(err => {
            if(err) {
                res.json({ message: 'we could not log you out' });
            } else {
                res.status(200).json({ message: 'logout successful' });
            }
        })
    } else {
        res.status(200).json({ message: 'you were not logged in' });
    }
})
module.exports = router;