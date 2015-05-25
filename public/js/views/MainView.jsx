// this is the main app that lives in the root of the views folder
var React = require('react'),
    HomeView = require('views/pages/Home'),
    app;

app = React.createClass({
  getInitialState: function() {
    return {
      profileActive: false
    };
  },

  render: function() {
    return (
      <div>
        <HomeView />
      </div>
    );
  }
});

module.exports = app;