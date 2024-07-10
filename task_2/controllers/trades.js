const { validationResult } = require('express-validator');
const Logger = require('../services/logger');
const TradeService = require('../services/tradeService');

class TradesController {
    static async createTrade(req, res) {
        try {
            const { type, user_id, symbol, shares, price, timestamp } = req.body;
            const { errors } = validationResult(req);
            if (errors.length) {
              return res.status(400).send({
                message: `${errors.map((err) => err.msg).join(', ')}`,
              });
            }

            const createdTrade = await TradeService.createTrade({ type, user_id, symbol, shares, price, timestamp });
            return res.status(201).send(createdTrade);
        }
        catch (err) {
            Logger.error(err);
            return res.status(500).send({ message: 'Something went wrong' });
        }
    }

    static async getTrades(req, res) {
        try {
            const { type, user_id, symbol, shares, price, timestamp } = req.query;
            const trades = await TradeService.getTrades({ type, user_id, symbol, shares, price, timestamp });

            return res.send(trades);
        } catch (error) {
            Logger.error(error);
            return res.status(500).send({ message: 'Something went wrong' });
        }
    }

    static async getTrade(req, res) {
        try {
            const trade = await TradeService.getTrade(req.params.id);
            if (!trade) {
                return res.status(404).send('ID not found');
            }

            return res.send(trade);
        } catch (error) {
            Logger.error(error);
            return res.status(500).send({ message: 'Something went wrong' });
        }
    }

    static async handleModification(_, res) {
        try {
            return res.status(405).send();
        } catch (error) {
            Logger.error(error);
            return res.status(500).send({ message: 'Something went wrong' });
        }
    }
}

module.exports = TradesController;