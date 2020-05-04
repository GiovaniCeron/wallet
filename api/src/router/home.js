const express = require('express');
const ParcelaController = require('../controller/ParcelaController');
const routes = express.Router();

routes.get('/banlance_overall', ParcelaController.findBalanceOverall);
routes.get('/wallet_current', ParcelaController.findAmountByMonth);

module.exports = routes;
