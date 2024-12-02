const express = require('express');
const {
  getAllClients,
  getClientById,
  createClient,
  updateClient,
  deleteClient,
} = require('../controllers/clientController');

const router = express.Router();

// Endpoints
router.get('/', getAllClients);        // Listar todos os clientes
router.get('/:id', getClientById);     // Buscar cliente por ID
router.post('/', createClient);        // Criar um novo cliente
router.put('/:id', updateClient);      // Atualizar cliente
router.delete('/:id', deleteClient);   // Deletar cliente

module.exports = router;
