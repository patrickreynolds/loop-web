/**
 *
 * main file that gets loaded by webpack
 * this will load the react front-end app
 * and global bootstrap styles
 *
 */

// bring in global bootstrap styles
require('bootstrap');
require('bootstrap-webpack!../less/bootstrap/bootstrap.config.js');

var React = require('react');
var $ = require('jquery');

// all global styles should be required here
var appStyle = require('../less/main.less');

// dispatcher for flux
var Dispatcher = require('dispatcher/dispatcher');

// require main app here
var mainView = require('views/mainView');
var App = React.createFactory(mainView);

React.render(new App(), $('body')[0]);
module.exports = App;