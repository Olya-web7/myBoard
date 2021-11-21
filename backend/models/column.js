const mongoose = require('mongoose');

const columnSchema = mongoose.Schema({
  title: { type: String, required: true },
  color: { type: String, required: false },
  list: { type: Array }
});

module.exports = mongoose.model('Column', columnSchema);
