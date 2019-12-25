const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const emailsSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});

const Emails = mongoose.model('Emails', emailsSchema);

module.exports = Emails;