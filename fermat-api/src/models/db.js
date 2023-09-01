const { Sequelize } = require('sequelize');
require('dotenv').config();

const dbName = process.env.MYSQL_DB;
const dbUser = process.env.MYSQL_USER;
const dbHost = process.env.MYSQL_HOST;
const dbPassword = process.env.MYSQL_PASSWORD;

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
    host: dbHost,
    dialect: "mysql",
});

// Função para autenticar a conexão com o banco de dados
async function authenticateDatabase() {
    try {
        await sequelize.authenticate();
        console.log('Conexão com o banco de dados estabelecida com sucesso.');
    } catch (error) {
        console.error('Erro ao conectar ao banco de dados:', error);
    }
}

// Função para sincronizar modelos com o banco de dados
async function syncDatabase() {
    await sequelize.sync();
}

module.exports = {
    sequelize,
    authenticateDatabase,
    syncDatabase,
};
