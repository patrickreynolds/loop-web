var controller = require('../controllers'),
    users      = controller.users,
    auth       = controller.auth,
    lists      = controller.lists,
    fs         = require('fs')

module.exports = function(app){

    // GET /
    app.get('/',function(req, res, next) {
        res.sendFile('index.html', {root: "public"});
    });

    // Users
    // GET /users
    app.get('/users', users.all);

    // POST /users
    app.post('/users', users.create);

    // GET /users/:id
    app.get('/users/:id', users.show);

    // UPDATE /users/:id
    app.put('/users/:id', users.update);

    // DELETE /users/:id
    app.delete('/users/:id', users.destroy);


    // Lists
    // GET /users/:id/lists
    app.get('/users/:userId/lists', lists.all);

    // // POST /users/:userId/lists
    app.post('/users/:userId/lists', lists.create);

    // // GET /users/:userId/lists/:listId
    app.get('/users/:userId/lists/:listId', lists.show);

    // // GET /users/:userId/lists/:listId
    app.put('/users/:userId/lists/:listId', lists.update);

    // // GET /users/:userId/lists/:listId
    app.delete('/users/:userId/lists/:listId', lists.destroy);


    // Auth
    // GET /login
    app.post('/login', auth.login);
    
    // GET /signup
    app.post('/signup', auth.signup);

};