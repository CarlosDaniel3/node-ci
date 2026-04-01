const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

let items = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" }
];

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP' });
});

app.get('/items', (req, res) => {
  res.json(items);
});

app.get('/items/:id', (req, res) => {
  const item = items.find(i => i.id == req.params.id);
  if (!item) {
    return res.status(404).json({ error: 'Item não encontrado' });
  }
  res.json(item);
});

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`API rodando em http://localhost:${PORT}`);
  });
}

module.exports = app;