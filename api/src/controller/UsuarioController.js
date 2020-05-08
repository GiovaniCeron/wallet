const Usuario = require('../model/UsuarioModel');

module.exports = {

  /**
   * Busca um Usuario
   * @param request 
   * @param response 
   */
  async find(request, response) {
    const { login, senha } = request.body;
    const usuario = await Usuario.findAll({
      where: {
        login,
        senha
      }
    });

    return response.json(usuario);
  },

  /**
   * Cadastra um usuario
   * @param request 
   * @param response 
   */
  async create(request, response) {
    const newUsuario = request.boby;
    const usuario = await Usuario.create(newUsuario);

    return response.json(usuario);
  },

  /**
   * Altera um usuario
   * @param request 
   * @param response 
   */
  async update(request, response) {
    const { nome_usuario, nucpf, login, senha, idusuario } = request.body;
    const usuario = await Usuario.update({
      nome_usuario,
      nucpf,
      login,
      senha
    }, {
      where: {
        idusuario
      }
    });

    return response.json(usuario);
  }
}