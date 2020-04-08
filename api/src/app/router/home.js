const express = require('express');
const TipoContaController = require('../controller/TipoContaController');
const routes = express.Router();

//Rotas da Teste
routes.get('/tipoconta', TipoContaController.lista);

module.exports = routes;
