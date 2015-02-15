// Using Mongoose Task model schema
var List = require('../../models/list')

// Exporting via the module pattern.
module.exports = function (req, res, next) {
    var userId = req.params.userId

    List.find({user: userId}, function(err, lists) {
        if (err) {
            res.json({
                status: 400,
                error: err
            })
        } else {
            console.log("Show all of " + userId + "'s lists")
            res.json({
                status: 200,
                userId: userId,
                lists: lists
            })
        }
    })
}