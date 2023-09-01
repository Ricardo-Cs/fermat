const { Sequelize } = require('sequelize');
const { sequelize } = require('./db');

module.exports = sequelize.define("user", {
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    type: {
        type: Sequelize.STRING,
        allowNull: false
    }
}); 