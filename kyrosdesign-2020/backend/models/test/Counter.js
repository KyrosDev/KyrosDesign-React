const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const buttonSchema = new Schema({
  counter: {type: Number}
});

const Button = mongoose.model('Button', buttonSchema);

module.exports = Button;