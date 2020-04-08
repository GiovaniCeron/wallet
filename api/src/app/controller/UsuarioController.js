const { entidades } = require('../../config/connection');

module.exports = {
    async lista(request, response) {
        //const lista = await entidades.Usuario.listar();
        return response.json({ teste: "teste" });
    }
}