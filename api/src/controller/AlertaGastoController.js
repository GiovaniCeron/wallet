const AlertaGasto = require('../model/AlertaGastosModel');

module.exports = {

  /**
   * Lista todos os alertas de gastos
   * @param request 
   * @param response 
   */
  async list(request, response) {
    try {
      const alertas = await AlertaGasto.findAll({
        where: {
          ativo: true
        }
      });

      return response.json(alertas);

    } catch (error) {
      return response.status(500).send(error);
    }
  },

  /**
   * Cadastra um alerta
   * @param request 
   * @param response 
   */
  async insert(request, response) {
    const alerta = request.body;
    try {
      AlertaGasto.create(alerta);
      return response.status(200);
    } catch (error) {
      return response.status(500).status(error);
    }
  },

  /**
   * Altera um alerta
   * @param request 
   * @param response 
   */
  async update(request, response) {
    const { idalerta, valor, ativo, idusuario_cancel, dtcancelado } = request.body;

    try {
      Cofrinho.update({
        valor: valor,
        ativo: ativo,
        idusuario_cancel: idusuario_cancel,
        dtcancelado: dtcancelado
      }, {
        where: {
          idalerta: idalerta
        }
      });

      return response.status(200);
    } catch (error) {
      return response.status(500).send(error);
    }
  }
}