var controller = require('../controllers'),
    auth       = controller.auth,
    users      = controller.users,
    lists      = controller.lists,
    items      = controller.items

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

    // GET /:username
    app.get('/:username', users.showByUsername);

    // GET /:username
    app.get('/users/:userId', users.showById);    

    // UPDATE /users/:id
    app.put('/users/:userId', users.update);

    // DELETE /users/:id
    app.delete('/users/:userId', users.destroy);
    


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



    // Items
    // GET /users/:userId/lists/:listId/items
    app.get('/users/:userId/lists/:listId/items', items.all);

    // // POST /users/:userId/lists/:listId/items
    app.post('/users/:userId/lists/:listId/items', items.create);

    // // GET /users/:userId/lists/:listId/items/:itemId
    app.get('/users/:userId/lists/:listId/items/:itemId', items.show);

    // // GET /users/:userId/lists/:listId/items/item:id
    app.put('/users/:userId/lists/:listId/items/:itemId', items.update);

    // // GET /users/:userId/lists/:listId/items/:itemId
    app.delete('/users/:userId/lists/:listId/items/:itemId', items.destroy);



    // Auth
    // GET /login
    app.post('/login', auth.login);
    
    // GET /signup
    app.post('/signup', auth.signup);

};