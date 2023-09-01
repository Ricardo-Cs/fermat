const app = require('./app');
require('dotenv').config();
const db = require('./models/db');
const PORT = process.env.PORT || 5000;

db.authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
  })
  .catch((err) => {
    console.error('Erro ao conectar ao banco de dados:', err);
  });

app.listen(PORT, () => console.log(`Server rodando na porta ${PORT}`));