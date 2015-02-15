var mongoose = require('mongoose'),
    Schema   = mongoose.Schema,
    bcrypt   = require('bcrypt'),
    jwt      = require('jwt-simple')

function expiresIn(days) {
  var date = new Date();
  return date.setDate(date.getDate() + days)
}

function generateToken() {
  var expiration = expiresIn(7);
  return jwt.encode({
    exp: expiration
  }, require('../config/secret')())
}

var User = new Schema({
  username: {
    type:     String,
    unique:   true,
    required: true
  },
  email: {
    type:     String,
    unique:   true,
    required: true
  },
  password: {
    type:     String,
    required: true
  },
  sessionToken: {
    type:     String,
    unique:   true
  },
  updatedAt: {
    type:     Date,
    required: true
  },
  createdAt: {
    type:     Date,
    required: true
  }
});

User.pre('save', function(next) {
  if (!this.isModified('password')) {
    return next();
  }
  var self = this;
  return bcrypt.genSalt(function(err, salt) {
    if (err) {
      return next(err);
    }
    return bcrypt.hash(self.password, salt, function(err, hash) {
      if (err) {
        return next(err);
      }
      self.password = hash;
      return next();
    });
  });
});

User.methods.comparePassword = function(candidatePassword, callback) {
  return bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) {
      return callback(err, null);
    } else {
      return callback(null, isMatch);
    }
  });
};

User.statics.doesEmailExist = function(email, callback) {
  return this.count({ email: email }, callback);
};

User.statics.randomToken = function() {
  return generateToken()
};

module.exports = mongoose.model('User', User);