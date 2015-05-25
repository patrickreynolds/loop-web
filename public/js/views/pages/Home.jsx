var React     = require('react'),
    HeaderBar = require('views/components/headerBar.jsx'),
    HomeView;

HomeView = React.createClass({
  render: function() {
    return (
      <HeaderBar />
    );
  }
});

module.exports = HomeView;