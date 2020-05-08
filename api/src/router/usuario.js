const express = require('express');
const Usuario = require('../controller/UsuarioController');
const routes = express.Router();

/**
 * Metodos HTTP
 * 
 * GET: Busca alguma informação do back
 * POST: Cria alguma informação no back (recebe os dados)
 * PUT: Alterar alguma informação no back
 * DELETE : Deletar uma informação no back
 */

 /**
  * Tipos de Parametros
  * 
  * Query Params: Parametros nomeados enviados na rota apos "?" "&" (Filtros, paginação) - request.query
  * Route Parms :Parametros utilizados para identificar recursos (/usuarios/:id(1)) - request.parms
  * Request Body: Corpo da Requisição, utilizado para criar ou alterar recursos - request.body (usar express.json)
  */
routes.get('/usuario', Usuario.find);
routes.post('/usuario', Usuario.create);
routes.put('/usuario', Usuario.update);

module.exports = routes;

