/**
 *
 * main file that gets compiled by webpack
 * this will load the react front-end app
 * and global bootstrap styles
 *
 */

// bring in global bootstrap styles
require('bootstrap');
require('bootstrap-webpack!../less/bootstrap-config/bootstrap.config.js');

var React = require('react');
var $ = require('jquery');

// all global styles should be required here
var appStyle = require('../less/main.less');

// dispatcher for flux
var Dispatcher = require('dispatcher/dispatcher');

// react router for UI routes
var Router = require('react-router');
var routes = require('routes');

Router.run(routes, Router.HistoryLocation, function(Handler) {
  React.render(React.createElement(Handler, null), $('body')[0]);
});
