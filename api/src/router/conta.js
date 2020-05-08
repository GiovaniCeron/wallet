const express = require('express');
const ContaController = require('../controller/ContaController');
const ParcelaController = require('../controller/ParcelaController');
const routes = express.Router();

routes.post('/conta', ContaController.insert);
routes.get('/contaYear/:year', ParcelaController.findAmountByYear);
routes.get('/contaMonth/:month', ParcelaController.findAmountByMonth);
routes.get('/balancoTotal', ParcelaController.findBalanceOverall);

module.exports = routes;
