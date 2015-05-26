var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

// main UI Views
var App = require('views/App');
var Home = require('views/pages/Home');
var Profile = require('views/pages/Profile');

/* routes
 *
 * nest routes here to add new UI route
 *
 */
var routes = (
  <Route name='app' path='/' handler={App}>
    <DefaultRoute handler={Home} />
    <Route name='profile' handler={Profile} />
  </Route>
);

module.exports = routes;