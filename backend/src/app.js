'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');

const app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//conecta ao banco
mongoose.connect(config.connectionString);

//carrega os models
const Curriculum = require('./models/curriculum');
const Customer = require('./models/customer');

//carrega as rotas
const indexRoutes = require('./routes/index-route');
const curriculum = require('./routes/curriculum-route');
const customer = require('./routes/customer-route');

// Habilita o CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token, Authorization');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
}); 

app.use('/', indexRoutes);
app.use('/curriculums', curriculum);
app.use('/customers', customer);


module.exports = app;
 