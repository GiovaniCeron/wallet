const Conta = require('../model/ContaModel');
const Parcela = require('../model/ParcelaModel');
const moment = require('moment');

module.exports = {

  /**
   * Cadastra uma conta
   * @param request 
   * @param response 
   */
  async insert(request, response) {
    const newConta = request.body;
    try {
      const { idconta, dtvencimento } = await Conta.create(newConta);
      const vlparcela = valor / newConta.qtdqtdparcelas;

      for (let index = 1; index <= newConta.qtdqtdparcelas; index++) {
        const dtvcto = moment(dtvencimento).add(index, "M");
        const parcela = await Parcela.create({
          idconta: idconta,
          vlparcela: vlparcela,
          dtvcto: dtvencimento,
          idativo: true
        });
      }

      return response.status(200);
    } catch (error) {
      return response.status(500).send(error);
    }
  }
}