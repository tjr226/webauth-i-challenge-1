
function restricted(req, res, next) {

    if (req.session && req.session.username) {
        next();
    }   else {
        res.status(401).json({ message: "Please provide credentials." });
    }
}

module.exports = restricted;


// version from before cookies

// const bcrypt = require('bcryptjs');
// const Users = require('../users/users-model.js');

// function restricted(req, res, next) {
//     const { username, password } = req.headers;

//     if (username && password) {
//         Users.findBy({ username })
//             .first()
//             .then(user => {
//                 if (user && bcrypt.compareSync(password, user.password)) {
//                     next();
//                 } else {
//                     res.status(401).json({ message: 'Invalid credentials.' });
//                 }
//             })
//             .catch(error => {
//                 res.status(500).json(error);
//             })
//     }   else {
//         res.status(400).json({ message: "Please provide credentials." });
//     }
// }


// module.exports = restricted;