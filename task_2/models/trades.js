const {Sequelize, DataTypes} = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");
const { BUY, SELL } = require('../constants');

const Trade = sequelize.define('Trade', {
    id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: 'id'
    },
    type: {
        type: DataTypes.ENUM(BUY, SELL),
        allowNull: false,
        field: 'type'
    },
    user_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        field: 'user_id'
    },
    symbol: {
        type: DataTypes.STRING(250),
        allowNull: false,
        field: 'symbol'
    },
    shares: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        field: 'shares'
    },
    price: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        field: 'price'
    },
    timestamp: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        field: 'timestamp'
    },
  }, {
    tableName: 'trades',
    timestamps: false
  });

module.exports = Trade;