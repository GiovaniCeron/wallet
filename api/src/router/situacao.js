const express = require('express');
const ParcelaController = require('../controller/ParcelaController');
const routes = express.Router();

routes.get('/wallet_year', ParcelaController.findAmountByYear);

module.exports = routes;
