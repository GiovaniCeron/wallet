const Parcela = require('../model/ParcelaModel');
const moment = require('moment');

module.exports = {

  /**
   * Lista as contas de um mes
   * @param {Retorno} request 
   * @param {Resposta} response 
   */
  async findAmountByMonth(request, response) {
    const month = request.parms.month;
    const monthInit = moment.months(month).startOf('month').format("dd/MM/yyyy");
    const monthEnd = moment.months(month).endOf('month').format("dd/MM/yyyy");

    try {

      const parcelas = await Parcela.findAll({
        where: {
          dtvencimento: {
            $between: [monthInit, monthEnd]
          }
        }
      });

      return response.json(parcelas);

    } catch (error) {
      return response.status(500).send(error);
    }
  },

  /**
   * Lista as contas de um ano
   * @param {Retorno} request 
   * @param {Resposta} response 
   */
  async findAmountByYear(request, response) {
    const year = request.parms.year;
    const yearInit = moment.months(year).startOf('year').format("dd/MM/yyyy");
    const yearhEnd = moment.months(year).endOf('year').format("dd/MM/yyyy");

    try {

      const parcelas = await Parcela.findAll({
        where: {
          dtvencimento: {
            $between: [yearInit, yearhEnd]
          }
        }
      });

      return response.json(parcelas);

    } catch (error) {
      return response.status(500).send(error);
    }
  },

  /**
   * Retorna o balanço geral da carteira
   * @param request 
   * @param response 
   */
  async findBalanceOverall(request, response) {
    try {
      const parcelasPagas = await Parcela.sum('valor', {
        where: {
          pago: true,
          ativo: true
        }
      });

      const parcelasPendentes = await Parcela.sum('valor', {
        where: {
          pago: false,
          ativo: true
        }
      });

      const balanco = parcelasPagas - parcelasPendentes;

      response.json({ banlance: balanco });

    } catch (error) {
      response.status(500).sebd(error);
    }
  }

}