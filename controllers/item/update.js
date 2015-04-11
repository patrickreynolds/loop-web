// Using Mongoose Item model schema
var Item = require('../../models/item')

// Exporting via the module pattern.
module.exports = function(req, res, next) {
  var listId = req.params.listId
  var itemId = req.params.itemId

  Item.findById(itemId, function(err, item) {
    if (err) {
      res.json({
        status: 400,
        error:  err
      })
    }
    item.title     = req.body.title   || item.get('title')
    item.details   = req.body.details || item.get('details')
    item.updatedAt = Date.now()

    item.save(function(err){
      if (err) {
        res.json({
          status: 400,
          error:  err
        })
      } else {
        res.json({
          status: 200,
          item:   item
        })
      }
    })
  })
}