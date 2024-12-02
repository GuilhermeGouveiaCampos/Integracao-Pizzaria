const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Company = sequelize.define('Company', {
  id_empresa: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  razao_social: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nome_fantasia: DataTypes.STRING,
  cnpj: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  horario_abertura: DataTypes.TIME,
  horario_fechamento: DataTypes.TIME,
  telefone: DataTypes.STRING,
  endereco: DataTypes.STRING,
  bairro: DataTypes.STRING,
  cidade: DataTypes.STRING,
  estado: DataTypes.STRING,
  cep: DataTypes.STRING,
}, {
  tableName: 'empresa',
  timestamps: false,
});

module.exports = Company;
