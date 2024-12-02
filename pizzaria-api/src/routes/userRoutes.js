const express = require('express');
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require('../controllers/userController');

const router = express.Router();

// Endpoints
router.get('/', getAllUsers);         // Listar todos os usuários
router.get('/:id', getUserById);      // Buscar usuário por ID
router.post('/', createUser);         // Criar usuário
router.put('/:id', updateUser);       // Atualizar usuário
router.delete('/:id', deleteUser);    // Deletar usuário

module.exports = router;
