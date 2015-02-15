// Using Mongoose User model schema
var User = require('../../models/user')

// Exporting via the module pattern.
module.exports = function(req, res, next) {
    var userId = req.params.userId
    // Query MongoDB users by id
    User.findById(userId, function(err, user) {
        if (err) {
            res.json({
                status: 400,
                error: err
            })
        }

        user.username  = req.body.username  || user.get('username')
        user.password  = req.body.password  || user.get('password')
        user.email     = req.body.email     || user.get('email')
        user.firstName = req.body.firstName || user.get('firstName')
        user.lastName  = req.body.lastName  || user.get('lastName')
        user.updatedAt = Date.now()

        user.save(function(err){
            if (err) {
                res.json({
                    status: 400,
                    error: err
                })
            } else {
                res.json({
                    status: 200,
                    user:   user
                })
            }
        })
    })
}