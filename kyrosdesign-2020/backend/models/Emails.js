const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const emailsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  message: {
    type: String,
    required: true
  },
  isResolved: {
    type: Boolean,
    required: true,
  }
}, {
  timestamps: true,
});

const Emails = mongoose.model('Emails', emailsSchema);

module.exports = Emails;