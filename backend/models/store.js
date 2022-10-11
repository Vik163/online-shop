const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  image: {
    type: String,
  },
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
  newProduct: {
    type: String,
  },
});

module.exports = mongoose.model('card', cardSchema);
