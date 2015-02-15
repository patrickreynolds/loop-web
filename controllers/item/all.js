// Using Mongoose Item model schema
var Item = require('../../models/item')

// Exporting via the module pattern.
module.exports = function (req, res, next) {
    var userId = req.params.userId
    var listId = req.params.listId

    Item.find({list: listId}, function(err, items) {
        if (err) {
            res.json({
                status: 400,
                error: err
            })
        } else {
            console.log("Show all of " + listId + "'s items for user " + userId)
            res.json({
                status: 200,
                userId: userId,
                listId: listId,
                items: items
            })
        }
    })
}