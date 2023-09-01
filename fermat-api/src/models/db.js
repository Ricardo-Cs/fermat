const { Sequelize } = require('sequelize');
require('dotenv').config();

const dbName = process.env.MYSQL_DB; // passar os dados do .env para as constantes
const dbUser = process.env.MYSQL_USER;
const dbHost = process.env.MYSQL_HOST;
const dbPassword = process.env.MYSQL_PASSWORD;

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
    host: dbHost,
    dialect: "mysql",
    logging: false
});

module.exports = sequelize;