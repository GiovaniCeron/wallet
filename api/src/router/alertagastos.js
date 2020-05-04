const express = require('express');
const AlertaGasto = require('../controller/AlertaGastoController');
const routes = express.Router();

routes.get('/alerta_gasto', AlertaGasto.list);
routes.post('/alerta_gasto', AlertaGasto.insert);
routes.put('/alerta_gasto', AlertaGasto.update);

module.exports = routes;