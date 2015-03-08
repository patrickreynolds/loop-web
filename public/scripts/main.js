// require global dependencies here
var React    = require('react'),
		$        = require('jquery'),

// all global styles should be required here
		appStyle = require('../styles/main.css'),

// dispatcher for flux
		Dispatcher = require('dispatcher/dispatcher'),

// require main app here
		main   	 = require('views/App'),
		App      = React.createFactory(main);

React.render(new App(), $('body')[0]);
module.exports = App;