// Using Mongoose User model schema
var User = require('../../models/user'),
    List = require('../../models/list')

// Exporting via the module pattern.
module.exports = function(req, res, next) {
    var userId = req.params.userId

    // Query MongoDB tasks by id
    User.findById(userId, function(err, user) {
        if (err) {
            res.json({
              status: 400,
              error:  'No user found with username: ' + username
            })
        } else {
            if (user) {
                console.log('\nRetrieving User: ' + user.username + '\n')
                List.find({user: user.get('_id')}, function(err, lists) {
                    if (err) {
                        res.json({
                            status: 400,
                            error: 'Error fetching lists: ' + err
                        })
                    }
                    console.log('Found Lists: ' + lists);
                    res.json({
                        status:   200,
                        userId:   user.get('_id'),
                        userName: user.get('username'),
                        lists:    lists
                    })
                })
            } else {
                res.json({
                    status: 400,
                    error:  'No user found with username: ' + username 
                })
            }
        }
    })
}
