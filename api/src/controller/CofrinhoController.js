const Cofrinho = require('../model/CofrinhoModel');

module.exports = {

  /**
   * Lista todos os cofrinhos
   * @param request 
   * @param response 
   */
  async list(request, response) {
    try {
      const cofrinhos = await Cofrinho.findAll({
        where: {
          ativo: true
        }
      });

      return response.json(cofrinhos);

    } catch (error) {
      return response.status(500).send(error);
    }
  },

  /**
   * Cadastra um cofrinho
   * @param request 
   * @param response 
   */
  async insert(request, response) {
    const cofrinho = request.body;
    try {
      Cofrinho.create(cofrinho);
      return response.status(200);
    } catch (error) {
      return response.status(500).status(error);
    }
  },

  /**
   * Altera um cofrinho
   * @param request 
   * @param response 
   */
  async update(request, response) {
    const { idcofrinho, valor_mensal, valor_guardado,
      valor_juros, valor_total, ativo, idusuario_cancel, dtcancelado } = request.body;

    try {
      Cofrinho.update({
        valor_mensal: valor_mensal,
        valor_guardado: valor_guardado,
        valor_juros: valor_juros,
        valor_total: valor_total,
        ativo: ativo,
        idusuario_cancel: idusuario_cancel,
        dtcancelado: dtcancelado
      }, {
        where: {
          idcofrinho: idcofrinho
        }
      });

      return response.status(200);
    } catch (error) {
      return response.status(500).send(error);
    }
  }
}