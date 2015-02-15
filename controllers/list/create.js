// Using Mongoose User model schema
var List = require('../../models/list')

// Exporting via the module pattern.
module.exports = function(req, res, next) {
    var userId = req.params.userId

    var newList = {
        title:          req.body.title,
        description:    req.body.description,
        createdAt:      Date.now(),
        updatedAt:      Date.now(),
        user:           userId
    }
    
    List.create(newList, function(err, list) {
        if (err) { 
            res.json({
                status: 400,
                error: err
            })
        } else {
            console.log('Created List: ' + list.get('title'));
            res.json({
                status: 200,
                list:   list
            })
        }
    })
}