const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();

app.use(bodyParser.json());

// use routes
app.use('/avatars', require('./routes/avatars'));

const server = app.listen(process.env.PORT || 3000);

module.exports = server;