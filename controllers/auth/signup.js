var User      = require('../../models/user.js'),
    async     = require('async'),
    validator = require('../../libs/validator');

module.exports = (function() {
    return function signup(req, res, next) {
        console.log(req.body)
        if (!req.body.email) {
            return res.json({
                status: 400,
                field: 'email',
                error: 'Email must be filled'
            });
        } else if (!validator.isEmail(req.body.email)) {
            return res.json({
                status: 400,
                field: 'email',
                error: 'Email must be valid'
            });
        } else if (!req.body.username) {
            return res.json({
                status: 400,
                field: 'username',
                error: 'Username must be filled'
            });
        } else if (!req.body.password) {
            return res.json({
                status: 400,
                field: 'password',
                error: 'Password must be filled'
            });
        } else if (req.body.password.length < 6) {
            return res.json({
                status: 400,
                field: 'password',
                error: 'Password length must be at least 6 characters'
            });
        }

        return async.waterfall([
            function(callback) {
                return User.doesEmailExist(req.body.email, callback);
            },
            function(emailDoesExist, callback) {
                if (emailDoesExist) {
                    return res.json({
                        status: 400,
                        field: 'email',
                        error: 'Email already exists'
                    });
                }

                var newUser = new User({
                    email:        req.body.email,
                    username:     req.body.username,
                    password:     req.body.password,
                    lists:        [],
                    updatedAt:    Date.now(),
                    createdAt:    Date.now(),
                    sessionToken: User.randomToken()
                });

                return newUser.save(callback);
            }
        ], function(err, newUser) {
            if (err) { return next(err); }
            return res.json({
                status: 200,
                userId: newUser._id,
                sessionToken: newUser.sessionToken,
                username: newUser.username
            });
        });
    };
})();