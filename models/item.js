var mongoose = require('mongoose'),
    Schema   = mongoose.Schema

var Item = new Schema({
  title: {
    type:     String,
    required: true
  },
  details: {
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
  list: {
    type:     Schema.ObjectId,
    ref:      'List'
  },
  user: {
    type:     Schema.ObjectId, 
    ref:      'User'
  }
});

module.exports = mongoose.model('Item', Item);