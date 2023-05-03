const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');
app.use(cors());

const chefs = require('./data/chefs.json');

// app.get('/', (req, res) => {
//   res.send('Server is running successfully');
// });

app.get('/', (req, res) => {
  res.send(chefs);
});

app.listen(port, () => {
  console.log('Server is running successfully');
});

/* 

// import express from 'express';
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

const port = process.env.PORT || 5000;

const categories = require('./data/categories.json');
const allNews = require('./data/news.json');

app.get('/', (req, res) => {
  res.send('testing');
});

app.get('/categories', (req, res) => {
  res.send(categories);
});

app.get('/categories/:id', (req, res) => {
  const id = req.params.id;
  if (parseFloat(id) === 0) {
    res.send(allNews);
  } else {
    const filtered = allNews.filter((news) => news.category_id === id);
    res.send(filtered);
  }
});

app.get('/allnews', (req, res) => {
  res.send(allNews);
});

app.get('/allnews/:id', (req, res) => {
  const id = req.params.id;
  const found = allNews.find((news) => news._id === id);
  res(found);
});

app.listen(port, () => {
  console.log(`Good`);
});




*/
