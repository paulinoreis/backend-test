'use strict'

// **** imports ****
const express = require('express'); // MVC suport
const bodyParser = require('body-parser');  // JSON suport
const mongoose = require('mongoose'); // NoSQL suport - MongoDB
const event_route = require('./routes/event-route');  // routers load
const user_route = require('./routes/user-route');  // routers load
const config = require('./config');

// **** create application ****
const app = express();

// **** mongoose config ****
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', true);
mongoose.set('useCreateIndex', true);

// **** db connection ****
mongoose.connect(config.connectionString);

// **** body-parser config ****
app.use(bodyParser.json({ limit: '1mb' }));
app.use(bodyParser.urlencoded({ extended: false }));

// *** CORS ****

app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    next();
})



// **** set router ****
app.use('/events', event_route);
app.use('/users', user_route);

// **** exports ****
module.exports = app;