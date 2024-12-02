const Company = require('../models/Company');

// Buscar todas as empresas ou a única empresa registrada
const getCompany = async (req, res) => {
  try {
    const companies = await Company.findAll(); // Busca todos os registros na tabela
    if (companies.length === 0) {
      return res.status(404).json({ error: 'Nenhuma empresa encontrada.' });
    }
    res.status(200).json(companies);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar informações da empresa.', details: error.message });
  }
};

// Inserir uma nova empresa
const createCompany = async (req, res) => {
  try {
    const newCompany = await Company.create(req.body);
    res.status(201).json(newCompany);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao inserir nova empresa.', details: error.message });
  }
};

// Buscar empresa por ID
const getCompanyById = async (req, res) => {
  try {
    const { id } = req.params;
    const company = await Company.findByPk(id); // Busca por ID
    if (!company) {
      return res.status(404).json({ error: 'Empresa não encontrada.' });
    }
    res.status(200).json(company);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar empresa por ID.', details: error.message });
  }
};

// Atualizar informações da empresa
const updateCompany = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Company.update(req.body, { where: { id_empresa: id } }); // Atualiza pelo ID
    if (!updated) {
      return res.status(404).json({ error: 'Empresa não encontrada.' });
    }
    res.status(200).json({ message: 'Informações da empresa atualizadas com sucesso.' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar informações da empresa.', details: error.message });
  }
};

// Excluir empresa pelo ID
const deleteCompany = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Company.destroy({ where: { id_empresa: id } });
    if (!deleted) {
      return res.status(404).json({ error: 'Empresa não encontrada.' });
    }
    res.status(200).json({ message: 'Empresa excluída com sucesso.' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir empresa.', details: error.message });
  }
};

// Exportando todas as funções
module.exports = { getCompany, createCompany, getCompanyById, updateCompany, deleteCompany };
