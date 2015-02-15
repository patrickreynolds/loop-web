// Using Mongoose User model schema
var List = require('../../models/list');

// Exporting via the module pattern.
module.exports = function(req, res, next) {
    var listId = req.params.listId
    
    List.remove({
        _id: listId
    }, function(err) {
        if (err) {
            res.json({
                status: 400,
                error:  err
            })
        } else {
            console.log('\nDestroying list with id: ' + listId + '\n')
            res.json({
                status: 200
            })
        }
    })
}