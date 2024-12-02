const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Client = sequelize.define('Client', {
  id_cliente: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  data_nascimento: {
    type: DataTypes.DATE,
    allowNull: false,
  },    
  telefone: DataTypes.STRING,
  estado: DataTypes.STRING,
  total_gasto: {
    type: DataTypes.DECIMAL(10, 2),
    defaultValue: 0,
  },
  total_pedidos: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  data_ultima_compra: DataTypes.DATE,
}, {
  tableName: 'clientes', // Nome da tabela no banco
  timestamps: false,    // Não adiciona createdAt/updatedAt
});

module.exports = Client;
