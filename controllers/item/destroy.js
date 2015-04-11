// Using Mongoose Item model schema
var Item = require('../../models/item');

// Exporting via the module pattern.
module.exports = function(req, res, next) {
  var itemId = req.params.itemId

  List.remove({
    _id: itemId
  }, function(err) {
    if (err) {
      res.json({
        status: 400,
        error:  err
      })
    } else {
      console.log('\nDestroying item with id: ' + itemId + '\n')
      res.json({
        status: 200
      })
    }
  })
}