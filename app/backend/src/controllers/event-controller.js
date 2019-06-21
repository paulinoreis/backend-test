'use strict'

// **** imports ****
const mongoose = require('mongoose');
const Event = require('../models/event-model')

// Create
exports.post = (req, res, next) => {
    var event = new Event(req.body);
    event
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

// List all
exports.get = (req, res, next) => {
    Event
        .find({}, 'title dateList')
        .sort({ dateList: 'asc' })
        .then(data => {
            res.status(200).send(data); // OK
        }).catch(e => {
            res.status(400).send(e); // Bad request
        });
}

// List by id
exports.getById = (req, res, next) => {
    Event
        .findById({
            _id: req.params.id,
        }, 'title description dateList location featured imagenURL')
        .then(data => {
            res.status(200).send(data); // OK
        }).catch(e => {
            res.status(400).send(e); // Bad request
        });
}

// List by featured
exports.getByFeatured = (req, res, next) => {
    Event
        .find({ featured: true },
            'title description dateList location featured')
        .sort({ dateList: 1 })
        .then(data => {
            res.status(200).send(data); // OK
        }).catch(e => {
            res.status(400).send(e); // Bad request
        });
}
