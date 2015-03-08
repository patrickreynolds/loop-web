var React     = require('react'),
    HeaderBar = require('views/components/headerBar.jsx'),
    ProfileView;

ProfileView = React.createClass({
  render: function() {
    return (
      <HeaderBar />
    );
  }
});

module.exports = ProfileView;
