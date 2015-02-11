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

var userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  sessionToken: {
    type: String,
    unique: true
  },
  lists: [{
    title: String,
    description: String,
  }],
  updatedAt: {
    type: Number
  },
  createdAt: {
    type: Number
  }
});

userSchema.pre('save', function(next) {
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

userSchema.methods.comparePassword = function(candidatePassword, callback) {
  return bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) {
      return callback(err, null);
    } else {
      return callback(null, isMatch);
    }
  });
};

userSchema.statics.doesEmailExist = function(email, callback) {
  return this.count({ email: email }, callback);
};

userSchema.statics.randomToken = function() {
  return generateToken()
};

module.exports = mongoose.model('User', userSchema);