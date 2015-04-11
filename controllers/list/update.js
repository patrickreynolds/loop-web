// Using Mongoose User model schema
var List = require('../../models/list')

// Exporting via the module pattern.
module.exports = function(req, res, next) {
  var userId = req.params.userId
  var listId = req.params.listId

  List.findById(listId, function(err, list) {
    console.log("HERE 1")
    if (err) {
      res.json({
        status: 400,
        error:  err
      })
    }
    list.title       = req.body.title       || list.get('title')
    list.description = req.body.description || list.get('description')
    list.updatedAt   = Date.now()

    list.save(function(err){
      if (err) {
        res.json({
          status: 400,
          error: err
        })
      } else {
        res.json({
          status: 200,
          list:   list
        })
      }
    })
  })
}