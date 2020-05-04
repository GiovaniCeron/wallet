const express = require('express');
const Usuario = require('../controller/UsuarioController');
const routes = express.Router();

routes.get('/usuario', Usuario.list);
routes.post('/usuario', Usuario.insert);
routes.put('/usuario', Usuario.update);

module.exports = routes;

