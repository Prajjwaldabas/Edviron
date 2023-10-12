const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email_id: {
    type: String,
    required: true,
    unique: true,
  },
  password_hash: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Create a model based on the schema
const edvironadmins = mongoose.model('edvironadmins', userSchema);

module.exports = edvironadmins;
