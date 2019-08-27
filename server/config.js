const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const app = express();
const path = require('path');
// middle ware

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('/home/byordani93/JCEF/tuNerd/client/dist'));

// http request

module.exports = app;