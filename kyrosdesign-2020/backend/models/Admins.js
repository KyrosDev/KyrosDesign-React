const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
    
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    super: {
        type: Boolean,
        required: true
    },
    roles: {
        type: Array,
        required: true,
    }

});

module.exports = AdminSchema;