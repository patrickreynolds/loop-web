// Using Mongoose User model schema
var User = require('../../models/user')

// Exporting via the module pattern.
module.exports = function(req, res, next) {
    var newUser = {
        username:  req.body.username,
        email:     req.body.email,
        password:  req.body.password,
        lists:     [],
        updatedAt: Date.now(),
        createdAt: Date.now()
    }

    // Inserting a new user into MongoDB via Mongoose create method.
    User.create(newUser, function(err, user) {
        if (err) { 
            res.json({
                status: 400,
                error:  err
            })
        } else {
            console.log('Created User: ' + user);
            res.json({
                status: 200,
                user:   user
            })
        }
    })
}