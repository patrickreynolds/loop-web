// this is the main app that lives in the root of the views folder
var React = require('react'),
    ProfileView = require('./pages/profile/ProfileView'),
    app;

app = React.createClass({
  getInitialState: function() {
    return {
      profileActive: false
    };
  },

  render: function() {
    return (
      <ProfileView />
    );
  }
});

module.exports = app;