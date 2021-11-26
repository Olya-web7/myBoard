const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const boardRoutes = require('./routes/board');
const userRoutes = require('./routes/user');

const app = express();

mongoose.connect('mongodb+srv://olya:AaFbYgMfg4aHoQ82@cluster0.frvxq.mongodb.net/myBoard?retryWrites=true&w=majority')
  .then(() => {
    console.log('connected to db');
  })
  .catch(() => {
    console.log('connection failed');
  });

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', "*");
  res.setHeader(
    'Access-Control-Allow-Headers',
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
  next();
});

app.use('/api/board', boardRoutes);
app.use('/api/user', userRoutes);

module.exports = app;
