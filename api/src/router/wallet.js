const express = require('express');
const ParcelaController = require('../controller/ParcelaController');
const routes = express.Router();

routes.get('/wallet_month', ParcelaController.findAmountByMonth);

module.exports = routes;

