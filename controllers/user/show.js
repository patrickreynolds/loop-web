// Using Mongoose User model schema
var User = require('../../models/user')

// Exporting via the module pattern.
module.exports = function(req, res, next) {
    var username = req.params.username

    // Query MongoDB tasks by id
    User.findOne({username: username}, function(err, user) {
        if (err) {
            res.json({
              status: 400,
              error:  "No user found with id: " + id 
            })
        } else {
            if (user) {
                console.log("\nRetrieving User: " + user.username + "\n")
                res.json({
                    status:   200,
                    userId:   user.get('_id'),
                    userName: user.get('username'),
                    lists:    user.get('lists')
                })
            } else {
                res.json({
                    status: 400,
                    error:  "No user found with id: " + id 
                })
            }
        }
    })
}