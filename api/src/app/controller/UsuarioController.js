const { models } = require('../../config/connection');

module.exports = {
    async lista(request, response) {
        const lista = await models.Usuario.listar();
        return response.json(lista);
    }
}