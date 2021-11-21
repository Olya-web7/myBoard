const mongoose = require('mongoose');

const columnSchema = mongoose.Schema({
  title: { type: String, required: false },
  color: { type: String, required: false },
  list: { type: Array, required: false }
});

module.exports = mongoose.model('Column', columnSchema);
