const Usuario = require('../model/UsuarioModel');

module.exports = {
    async lista(request, response) {
        const teste = await Usuario.findAll(); 
        response.json(teste);
    }
}