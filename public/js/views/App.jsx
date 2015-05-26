// this is the main App that lives in the root of the views folder
var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var NavBar = require('views/components/NavBar');
var App;

App = React.createClass({
  render: function() {
    return (
      <div>
        <NavBar />
        <RouteHandler />
      </div>
    );
  }
});

module.exports = App;