// Using Mongoose User model schema
var User = require('../../models/user')

// Exporting via the module pattern.
module.exports = function(req, res, next) {
    var username = req.body.username;
    var password = req.body.password;

    // Query MongoDB tasks by id
    User.findOne({username: username}, function(err, user) {
        if (err) {
            res.json({
                status: 400,
                error: err
            })
        } else if (user) {
            if (user.get('password', String) === password) {
                console.log("\nAuthenticating User: " + username + "\n")
                res.json({
                    status: 200,
                    user: user
                });
            } else {
                res.json({
                    status: 400,
                    field: "password",
                    error: "Invalid password for username: " + username 
                })
            }
        } else {
            res.json({
                status: 400,
                field: "username",
                error: "No user found with username: " + username 
            })
        }
    })
}