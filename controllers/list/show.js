// Using Mongoose User model schema
var List = require('../../models/list'),
    Item = require('../../models/item')

// Exporting via the module pattern.
module.exports = function(req, res, next) {
    var userId = req.params.userId
    var listId = req.params.listId

    // Query MongoDB tasks by id
    List.findById(listId, function(err, list) {
        if (err) {
            res.json({
              status: 400,
              error:  'No list found with id: ' + listId
            })
        } else {
            if (list) {
                console.log('\nRetrieving items for list: ' + list.get('title') + '\n')
                Item.find({list: listId}, function(err, items) {
                    if (err) {
                        res.json({
                            status: 400,
                            error: 'Error fetching items: ' + err
                        })
                    }
                    console.log('Found Items: ' + items);
                    res.json({
                        status: 200,
                        userId: userId,
                        listId: listId,
                        title:  list.get('title'),
                        items:  items
                    })
                })
            } else {
                res.json({
                    status: 400,
                    error:  'No list found with id: ' + listId
                })
            }
        }
    })
}