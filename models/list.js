var mongoose = require('mongoose'),
    Schema   = mongoose.Schema

var List = new Schema({
  title: {
    type:     String,
    required: true
  },
  description: {
    type:     String
  },
  createdAt: {
    type:     Date,
    required: true
  },
  updatedAt: {
    type:     Date,
    required: true
  },
  user: {
    type:     Schema.ObjectId,
    ref:      'User'
  }
});

module.exports = mongoose.model('List', List);