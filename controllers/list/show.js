// Using Mongoose List model schema
var List = require('../../models/list')

// Exporting via the module pattern.
module.exports = function(req, res, next) {
    var userId = req.params.userId
    var listId = req.params.listId

    List.findById(listId, function(err, list) {
        if (err) {
            res.json({
              status: 400,
              error: "No list found with id: " + id 
            })
        }

        if (!list) {
            res.json({
              status: 400,
              error: "No list found with id: " + id 
            })
        }

        res.json({
            status: 200,
            list: list
        })
    })
}