const TipoConta = require('../model/TipoContaModel');

module.exports = {

  /**
   * Lista todas os tipos de contas
   * @param request 
   * @param response 
   */
  async list(request, response) {
    try {
      const tiposContas = await TipoConta.findAll();
      return response.json(tiposContas);
    } catch (error) {
      return response.statu(500).send(error);
    }
  },

  /**
   * Cadastra um tipo de conta
   * @param request 
   * @param response 
   */
  async create(request, response) {
    const tipoConta = request.body;

    try {
      TipoConta.create(tipoConta);
      response.status(200);
    } catch (error) {
      response.status(500).send(error);
    }
  },

  /**
   * Altera um tipo de conta
   * @param request 
   * @param response 
   */
  async update(request, response) {
    const { idtipoconta, descricao, pagar, receber, ativo } = request.body;

    try {
      TipoConta.update({
        descricao: descricao,
        pagar: pagar,
        receber: receber,
        ativo: ativo
      }, {
        where: {
          idtipoconta: idtipoconta
        }
      });

      return response.status(200);

    } catch (error) {
      return response.statu(500).send(error);
    }
  }
}