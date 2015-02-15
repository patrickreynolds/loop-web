// Using Mongoose User model schema
var User = require('../../models/user');

// Exporting via the module pattern.
module.exports = function(req, res, next) {
    var userId = req.params.userId
    
    User.remove({
        _id: userId
    }, function(err) {
        if (err) {
            res.json({
                status: 400,
                error:  err
            })
        } else {
            console.log('\nDestroying user with id: ' + userId + '\n')
            res.json({
                status: 200
            })
        }
    })
}