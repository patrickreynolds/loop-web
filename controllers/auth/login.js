// Using Mongoose User model schema
var User  = require('../../models/user'),
    async = require('async');

// Exporting via the module pattern.
module.exports = (function() {
    return function login(req, res, next) {
        return async.waterfall([
            function(callback) {
                if (typeof req.body.username !== 'undefined' || typeof req.body.email !== 'undenfined' && typeof req.body.password !== 'undenfined') {
                    if (!req.body.password) {
                        return res.json({
                            status: 400,
                            field: 'password',
                            error: 'Password must be filled'
                        });
                    }
                    if (req.body.username) {
                        return User.findOne({ username: req.body.username }, function (err, user) {
                            if (err) { return next(err); }
                            if (!user) {
                                return callback(null, null);
                            }
                            return user.comparePassword(req.body.password, function(err, isMatch) {
                                if (err) { return next(err) }
                                    return callback(null, isMatch ? user : null);
                            });
                        });
                    } else if (typeof req.body.email !== 'undefined') {
                        return User.findOne({ email: req.body.email }, function (err, user) {
                            if (err) { return next(err); }
                            if (!user) {
                                return callback(null, null);
                            }
                            return user.comparePassword(req.body.password, function(err, isMatch) {
                                if (err) { return next(err) }
                                    return callback(null, isMatch ? user : null);
                            });
                        });
                    } else {
                        return res.json({
                            status: 400,
                            field: 'username',
                            error: 'Username or password must be filled in'
                        });
                    }
                }
            }, function(_user, callback) {
                if (!_user) {
                    return res.json({
                        status: 400,
                        error: 'Invalid username and password combination'
                    })
                }
                _user.sessionToken = User.randomToken()
                return _user.save(callback);
            }
        ], function(err, currentUser) {
            if (err) { return next(err) };    
            return res.json({
                status: 200,
                userId: currentUser._id,
                sessionToken: currentUser.sessionToken
            })
        })
    }
}());
