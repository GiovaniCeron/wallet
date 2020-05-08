const express = require('express');
const TipoConta = require('../controller/TipoContaController');
const routes = express.Router();

routes.get('/tipoconta', TipoConta.list);
routes.post('/tipoconta', TipoConta.create);
routes.put('/tipoconta', TipoConta.update);

module.exports = routes;
