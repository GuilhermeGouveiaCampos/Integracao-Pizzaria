const express = require('express');
const { getCompany, updateCompany, createCompany, getCompanyById, deleteCompany } = require('../controllers/companyController');

const router = express.Router();

// Rota para criar empresa
router.post('/', createCompany);

// Rota para buscar todas as empresas (ou a única, caso seja uma)
router.get('/', getCompany);

// Rota para buscar empresa por ID
router.get('/:id', getCompanyById);

// Rota para atualizar informações da empresa
router.put('/', updateCompany);

// Rota para atualizar informações da empresa pelo ID
router.put('/:id', updateCompany);

// Rota para excluir empresa pelo ID
router.delete('/:id', deleteCompany);

module.exports = router;
