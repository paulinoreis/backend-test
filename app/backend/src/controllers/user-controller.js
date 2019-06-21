'use strict'

// **** imports ****
const mongoose = require('mongoose');
const md5 = require('md5');
const User = require('../models/user-model')
const authService = require('../services/auth-service');

// Authenticate
exports.authenticate = (req, res, next) => {
    User
        .findOne({ email: req.body.email, password: md5(req.body.password+ global.SALT_KEY)})
        .then(data => {
            if (!data) {
                res.status(400).send({
                    message: 'Invalid user name or password.'
                });
                return;
            }

            const token = authService.gererateToken({
                email: data.email,
                name: data.name
            })

            res.status(201).send({
                token: token,
                data: {
                    email: data.email,
                    name: data.name,
                }
            }); // OK
        }).catch(e => {
            res.status(400).send(e); // Bad request
        });
};

// Create
exports.post = (req, res, next) => {
    var user = new User({
        name: req.body.name,
        email: req.body.email,
        password: md5(req.body.password+ global.SALT_KEY)
    });
    user
        .save()
        .then(x => {
            res.status(201).send({ message: 'Ok!' }); // Created
        }).catch(e => {
            res.status(400).send({ // Bad request
                message: 'Error:',
                data: e
            });
        });
};