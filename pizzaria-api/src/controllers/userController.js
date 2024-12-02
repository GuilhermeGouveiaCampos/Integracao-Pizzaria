const User = require('../models/User');

// Listar todos os usuários
const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar usuários.' });
  }
};

// Buscar usuário por ID
const getUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ error: 'Usuário não encontrado.' });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar usuário.' });
  }
};

// Criar novo usuário
const createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar usuário.' });
  }
};

// Atualizar usuário
const updateUser = async (req, res) => {
  try {
    const [updated] = await User.update(req.body, {
      where: { id_usuario: req.params.id },
    });
    if (!updated) return res.status(404).json({ error: 'Usuário não encontrado.' });
    res.status(200).json({ message: 'Usuário atualizado com sucesso.' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar usuário.' });
  }
};

// Deletar usuário
const deleteUser = async (req, res) => {
  try {
    const deleted = await User.destroy({
      where: { id_usuario: req.params.id },
    });
    if (!deleted) return res.status(404).json({ error: 'Usuário não encontrado.' });
    res.status(200).json({ message: 'Usuário deletado com sucesso.' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar usuário.' });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
