const express = require('express');
const uuid = require('uuid');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/anti-corruption-layer', (req, res) => {
  const id = uuid.v4();
  const description = 'Anti-corruption layer API';
  res.json({ id, description });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
