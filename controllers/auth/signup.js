// Using Mongoose User model schema
var User = require('../../models/user')

// Exporting via the module pattern.
module.exports = function(req, res, next) {
    if (req.body.username !== "" && req.body.password !== "") {
        var newUser = {
            username:  req.body.username,
            password:  req.body.password,
            firstName: req.body.firstName || "",
            lastName: req.body.lastName || "",
            lists: [],
            updatedAt: Date.now(),
            createdAt: Date.now()
        }

        // Inserting a new user into MongoDB
        // via Mongoose create method.
        User.create(newUser, function(err, user) {
            if (err) { 
                res.json({
                    status: 400,
                    error: err
                })
            } else {
                console.log("Created User: " + user);
                res.json({
                    status: 200,
                    user: user,
                    userId: user.get('_id')
                })
            }
        })
    } else if (req.body.username === "") {
        res.json({
            status: 400,
            field: "username",
            error: "No username was provided"
        })
    } else if (req.body.password === "") {
        res.json({
            status: 400,
            field: "password",
            error: "No password was provided"
        })
    }
}