// Using Mongoose User model schema
var User = require('../../models/user')

// Exporting via the module pattern.
module.exports = function(req, res, next) {

    User.findById(req.params.userId, function(err, user) {
        if (err) {
            res.json({
              status: 400,
              error: "No user found with id: " + id 
            })
        } else {
            var foundList;
            user.get('lists').forEach(function(list) {
                if (list._id.toHexString() === req.params.listId) {
                    foundlist = list;
                }
            })
            if (foundlist) {
                res.json({
                    status: 200,
                    userId: user.get('_id'),
                    list: foundlist
                })
            } else {
                res.json({
                    status: 400,
                    error: "No list found with id: " + req.params.listId
                })
            }
        }
    })
}