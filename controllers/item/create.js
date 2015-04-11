// Using Mongoose Item model schema
var Item = require('../../models/item')

// Exporting via the module pattern.
module.exports = function(req, res, next) {
  var userId = req.params.userId
  var listId = req.params.listId

  var newItem = {
    title:     req.body.title,
    details:   req.body.details,
    createdAt: Date.now(),
    updatedAt: Date.now(),
    list:      listId,
    user:      userId
  }

  Item.create(newItem, function(err, item) {
    if (err) {
      res.json({
        status: 400,
        error:  err
      })
    } else {
      console.log('Created List: ' + item.get('title'));
      res.json({
        status: 200,
        userId: userId,
        listId: listId,
        item:   item
      })
    }
  })
}