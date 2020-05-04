const express = require('express');
const Cofrinho = require('../controller/CofrinhoController');
const routes = express.Router();

routes.get('/cofrinho', Cofrinho.list);
routes.post('/cofrinho', Cofrinho.insert);
routes.put('/cofrinho', Cofrinho.update);

module.exports = routes;
