define([
  'react',
  'jsx!../views/profile/profilePage'

], function(React, ProfileView) {

  var app = React.createClass({
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

  return app;
});