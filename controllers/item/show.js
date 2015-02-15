// Using Mongoose Item model schema
var Item = require('../../models/item')

// Exporting via the module pattern.
module.exports = function(req, res, next) {
    var itemId = req.params.itemId

    Item.findById(itemId, function(err, item) {
        if (err) {
            res.json({
              status: 400,
              error:  "Error when retreiving item with id: " + itemId 
            })
        }

        if (!item) {
            res.json({
              status: 400,
              error:  "No item found with id: " + itemId
            })
        }

        res.json({
            status: 200,
            item:   item
        })
    })
}