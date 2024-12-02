const express = require('express');
const {
  getAllPaymentMethods,
  getPaymentMethodById, // Nova rota
  createPaymentMethod,
  updatePaymentMethod,
  deletePaymentMethod,
} = require('../controllers/paymentMethodController');

const router = express.Router();

// Endpoints
router.get('/', getAllPaymentMethods);         // Listar métodos de pagamento
router.get('/:id', getPaymentMethodById);      // Buscar método de pagamento por ID
router.post('/', createPaymentMethod);         // Criar método de pagamento
router.put('/:id', updatePaymentMethod);       // Atualizar método de pagamento
router.delete('/:id', deletePaymentMethod);    // Deletar método de pagamento

module.exports = router;
