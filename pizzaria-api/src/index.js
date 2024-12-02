const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
require('dotenv').config();

const clientRoutes = require('./routes/clientRoutes');      // Rotas de clientes
const orderRoutes = require('./routes/orderRoutes');        // Rotas de pedidos
const userRoutes = require('./routes/userRoutes');          // Rotas de usuários
const companyRoutes = require('./routes/companyRoutes');    // Rotas de empresa
const paymentMethodRoutes = require('./routes/paymentMethodRoutes'); // Rotas de métodos de pagamento

const app = express();
app.use(bodyParser.json());

// Registrar rotas
app.use('/clients', clientRoutes);
app.use('/orders', orderRoutes);
app.use('/users', userRoutes);
app.use('/company', companyRoutes);
app.use('/payment-methods', paymentMethodRoutes);

// Conectar ao banco de dados e iniciar o servidor
sequelize.authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados bem-sucedida!');
    app.listen(process.env.PORT, () => {
      console.log(`Servidor rodando na porta ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.error('Erro ao conectar ao banco de dados:', error);
  });
