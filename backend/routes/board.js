const express = require('express');
const Column = require('../models/column');

const router = express.Router();

router.post("", (req, res, next) => {
  const column = new Column({
    title: req.body.title,
    list: req.body.list,
    color: req.body.color
  });
  // column.save();
  res.status(201).json({
    message: 'column added successfully'
  });
});

router.get('', (req, res, next) => {
  Column.find()
    .then(documents => {
      console.log(documents);
      res.status(200).json({
        message: 'board fetched successfully',
        board: documents
    });
  });
});

router.delete("/:id", (req, res, next) => {
  console.log(req.params.id);
  Column.deleteOne({_id: req.params.id}).then(result => {
    console.log(result);
    res.status(200).json({message: 'card deleted'});
  });
});

module.exports = router;
