const PaymentMethod = require('../models/PaymentMethod');

// Listar todos os métodos de pagamento
const getAllPaymentMethods = async (req, res) => {
  try {
    const methods = await PaymentMethod.findAll();
    res.status(200).json(methods);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar métodos de pagamento.', details: error.message });
  }
};

// Buscar método de pagamento por ID
const getPaymentMethodById = async (req, res) => {
  try {
    const { id } = req.params; // Capturar o ID da URL
    const method = await PaymentMethod.findByPk(id); // Buscar o registro pelo ID
    if (!method) {
      return res.status(404).json({ error: 'Método de pagamento não encontrado.' });
    }
    res.status(200).json(method);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar método de pagamento por ID.', details: error.message });
  }
};

// Criar um método de pagamento
const createPaymentMethod = async (req, res) => {
  try {
    const newMethod = await PaymentMethod.create(req.body);
    res.status(201).json(newMethod);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar método de pagamento.', details: error.message });
  }
};

// Atualizar método de pagamento
const updatePaymentMethod = async (req, res) => {
  try {
    const [updated] = await PaymentMethod.update(req.body, { where: { id_metodo: req.params.id } });
    if (!updated) return res.status(404).json({ error: 'Método de pagamento não encontrado.' });
    res.status(200).json({ message: 'Método de pagamento atualizado com sucesso.' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar método de pagamento.', details: error.message });
  }
};

// Deletar método de pagamento
const deletePaymentMethod = async (req, res) => {
  try {
    const deleted = await PaymentMethod.destroy({ where: { id_metodo: req.params.id } });
    if (!deleted) return res.status(404).json({ error: 'Método de pagamento não encontrado.' });
    res.status(200).json({ message: 'Método de pagamento deletado com sucesso.' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar método de pagamento.', details: error.message });
  }
};

module.exports = {
  getAllPaymentMethods,
  getPaymentMethodById, // Certifique-se de exportar a função de busca por ID
  createPaymentMethod,
  updatePaymentMethod,
  deletePaymentMethod,
};
