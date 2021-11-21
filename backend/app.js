const express = require('express');
const app = express();

app.use('/api/board', (req, res, next) => {
  const board = [
    {id: 134566, title: 'Done', color: '#009785', list: []},
    {id: 18765432, title: 'Went not well', color: '#009785', list: []}
  ];
 res.status(200).json({
   message: 'board fetched successfully',
   board: board
 });
});

module.exports = app;
