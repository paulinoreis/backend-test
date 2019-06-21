'use strict'

// **** imports ****
const jwt = require('jsonwebtoken'); // JSON Web Tokens

exports.gererateToken = (data) => {
    return jwt.sign(data, global.SALT_KEY, { expiresIn: '1d' });
}

exports.decodeToken = (token) => {
    var data = jwt.verify(token, global.SALT_KEY);
}

exports.authorize = function (req, res, next) {
    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    if (!token) {
        res.status(401).json({
            message: 'Restrict access!'
        });
    } else {
        jwt.verify(token, global.SALT_KEY, function (error, decoded) {
            if (error) {
                res.status(401).json({
                    message: 'Invalid token!'
                });
            } else {
                next();
            }
        })
    }
};
