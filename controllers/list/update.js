// Using Mongoose User model schema
var User = require('../../models/user')

// Exporting via the module pattern.
module.exports = function(req, res, next) {

    User.findById(req.params.userId, function(err, user) {
        if (err) {
            res.json({
                status: 400,
                error: err
            })
        } else {
            user.lists = user.get('lists').map(function(list) {
                if (list._id.toHexString() === req.params.listId) {
                    console.log("FOUND IT!")
                    list.title       = req.body.list.title
                    list.description = req.body.list.description
                    return list
                } else
                    return list
            })
            User.findByIdAndUpdate(req.params.userId, {"lists": user.lists}, function(err) {
                if (err) { 
                    res.json({
                        status: 400,
                        error: err
                    })
                } else {
                    res.json({
                        status: 200,
                        userId: user.get('_id'),
                        lists: user.get('lists')
                    })
                }
            })
        }
    })
}