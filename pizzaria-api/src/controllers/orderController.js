const Order = require('../models/Order');

// Listar todos os pedidos
const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.findAll();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar pedidos.' });
  }
};

// Buscar pedido por ID
const getOrderById = async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.id);
    if (!order) return res.status(404).json({ error: 'Pedido não encontrado.' });
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar pedido.' });
  }
};

// Criar um pedido
const createOrder = async (req, res) => {
  try {
    const newOrder = await Order.create(req.body);
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar pedido.' });
  }
};

// Atualizar pedido
const updateOrder = async (req, res) => {
  try {
    const [updated] = await Order.update(req.body, {
      where: { id_pedido: req.params.id },
    });
    if (!updated) return res.status(404).json({ error: 'Pedido não encontrado.' });
    res.status(200).json({ message: 'Pedido atualizado com sucesso.' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar pedido.' });
  }
};

// Deletar pedido
const deleteOrder = async (req, res) => {
  try {
    const deleted = await Order.destroy({
      where: { id_pedido: req.params.id },
    });
    if (!deleted) return res.status(404).json({ error: 'Pedido não encontrado.' });
    res.status(200).json({ message: 'Pedido deletado com sucesso.' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar pedido.' });
  }
};

module.exports = {
  getAllOrders,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
};
