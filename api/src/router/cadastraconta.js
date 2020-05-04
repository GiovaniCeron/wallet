const express = require('express');
const ContaController = require('../controller/ContaController');
const routes = express.Router();

routes.post('/cadastra_conta', ContaController.insert);

module.exports = routes;
