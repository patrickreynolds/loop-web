var React  = require('react'),
		$      = require('jquery')
		main   = require('views/App');
		App    = React.createFactory(main);

App = React.createFactory(main);
React.render(new App(), $('body')[0]);

module.exports = {};