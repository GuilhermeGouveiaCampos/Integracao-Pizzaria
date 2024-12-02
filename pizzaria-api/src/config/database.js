const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,  // Nome do banco de dados
  process.env.DB_USER,  // Usuário do banco
  process.env.DB_PASSWORD,  // Senha (vazio se não houver)
  {
    host: process.env.DB_HOST,  // Host do banco
    dialect: 'mysql',  // Dialeto
    logging: false,  // Desativa logs de SQL
  }
);

module.exports = sequelize;
