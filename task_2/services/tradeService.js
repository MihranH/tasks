const Trades = require('../models/trades');

class TradeService {
    static async createTrade(body) {
        return Trades.create(body);
    }

    static async getTrades(data) {
        const where = {};
        Object.entries(data).forEach(([key, value]) => {
            if (value) {
                where[key] = value;
            }
        });

        return Trades.findAll({
            order: [
                ['id', 'ASC']
            ],
            where
        });
    }

    static async getTrade(id) {
        return Trades.findByPk(id);
    }
}

module.exports = TradeService;