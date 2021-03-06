const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  jobTitle: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  joinDate: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('User', userSchema);
