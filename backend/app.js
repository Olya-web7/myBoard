const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Column = require('./models/column');
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

app.post("/api/board", (req, res, next) => {
  const column = new Column({
    title: req.body.title,
    list: req.body.list
  });
  column.save();

  res.status(201).json({
    message: 'column added successfully'
  });
});

app.get('/api/board', (req, res, next) => {
  Column.find()
    .then(documents => {
      console.log(documents);
      res.status(200).json({
        message: 'board fetched successfully',
        board: documents
    });
  });
});

module.exports = app;
