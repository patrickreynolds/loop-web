// Using Mongoose User model schema
var User = require('../../models/user')

// Exporting via the module pattern.
module.exports = function(req, res, next) {
    var newUser = {
        username:  req.body.username,
        password:  req.body.password,
        updatedAt: Date.now(),
        createdAt: Date.now(),
        lists:     []
    }

    // Inserting a new user into MongoDB via Mongoose create method.
    User.create(newUser, function(err, user) {
        if (err) { 
            res.json({
                status: 400,
                error:  err
            })
        } else {
            console.log("Created User: " + user);
            res.json({
                status: 200,
                user:   user
            })
        }
    })
}