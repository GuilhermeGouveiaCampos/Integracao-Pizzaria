const express = require('express');
const {
  getAllOrders,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
} = require('../controllers/orderController');

const router = express.Router();

// Endpoints
router.get('/', getAllOrders);         // Listar todos os pedidos
router.get('/:id', getOrderById);      // Buscar pedido por ID
router.post('/', createOrder);         // Criar um pedido
router.put('/:id', updateOrder);       // Atualizar pedido
router.delete('/:id', deleteOrder);    // Deletar pedido

module.exports = router;
