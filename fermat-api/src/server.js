const app = require('./app');
const { authenticateDatabase, syncDatabase } = require('./models/db');

require('dotenv').config();
const PORT = process.env.PORT || 5000;

authenticateDatabase()
  .then(() => {
    return syncDatabase();
  })

app.listen(PORT, () => console.log(`Server rodando na porta ${PORT}`));
