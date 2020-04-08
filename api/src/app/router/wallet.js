const express = require('express');
const UsuarioController = require('../controller/UsuarioController');
const routes = express.Router();

//Rotas da Teste
routes.get('/usuario', UsuarioController.lista);

module.exports = routes;
