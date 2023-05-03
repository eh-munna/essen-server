const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
app.use(cors());

const chefs = require('./data/chefs.json');
const chefDetails = require('./data/chefDetails.json');

app.get('/', (req, res) => {
  res.send(chefs);
});

app.get('/recipes', (req, res) => {
  res.send(chefDetails);
});
app.get('/recipes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const found = chefDetails.find((details) => details.id === id);

  res.send(found);
});

app.listen(port, () => {
  console.log('Server is running successfully');
});
