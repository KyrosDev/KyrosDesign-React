const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
  image: {
    type: String,
    required: true,
    unique: false,
    trim: false
  },
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  description: {
    type: String,
    required: true,
    unique: false,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    unique: false,
    trim: false,
    minlength: 1
  },
  availability: {
    type: String,
    required: true,
    unique: false,
    trim: false
  },
  worktime: {
    type: String,
    required: false,
    unique: false,
    trim: false,
    minlength: 6
  },

});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;