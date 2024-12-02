const Client = require('../models/Client');

// Listar todos os clientes
const getAllClients = async (req, res) => {
  try {
    const clients = await Client.findAll();
    res.status(200).json(clients);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar clientes.' });
  }
};

// Buscar cliente por ID
const getClientById = async (req, res) => {
  try {
    const client = await Client.findByPk(req.params.id);
    if (!client) return res.status(404).json({ error: 'Cliente não encontrado.' });
    res.status(200).json(client);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar cliente.' });
  }
};

// Criar um novo cliente
const createClient = async (req, res) => {
  try {
    const newClient = await Client.create(req.body);
    res.status(201).json(newClient);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar cliente.' });
  }
};

// Atualizar cliente
const updateClient = async (req, res) => {
  try {
    const [updated] = await Client.update(req.body, {
      where: { id_cliente: req.params.id },
    });
    if (!updated) return res.status(404).json({ error: 'Cliente não encontrado.' });
    res.status(200).json({ message: 'Cliente atualizado com sucesso.' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar cliente.' });
  }
};

// Deletar cliente
const deleteClient = async (req, res) => {
  try {
    const deleted = await Client.destroy({
      where: { id_cliente: req.params.id },
    });
    if (!deleted) return res.status(404).json({ error: 'Cliente não encontrado.' });
    res.status(200).json({ message: 'Cliente deletado com sucesso.' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar cliente.' });
  }
};

module.exports = {
  getAllClients,
  getClientById,
  createClient,
  updateClient,
  deleteClient,
};
