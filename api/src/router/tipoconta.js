const express = require('express');
const TipoConta = require('../controller/TipoContaController');
const routes = express.Router();

routes.get('/tipo_conta', TipoConta.list);
routes.post('/tipo_conta', TipoConta.insert);
routes.put('/tipo_conta', TipoConta.update);

module.exports = routes;
