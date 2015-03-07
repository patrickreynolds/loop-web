var React = require('react'),
    HeaderBar;

HeaderBar = React.createClass({
  render: function() {
    return (
      <div style={this.getHeaderBarStyle()}>
        <div style={this.getHeaderBarContainerStyle()}>
          <div className="logo" style={this.getLogoStyle()}>
            Loop
          </div>
          <div>
            <button>Sign In</button>
            <button>Sign Up</button>
          </div>
        </div>
      </div>
    );
  },

  // methods for styles go below this
  getHeaderBarStyle: function() {
    return {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100px',
      backgroundColor: 'lightgray'
    };
  },

  getHeaderBarContainerStyle: function() {
    return {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '95%'
    };
  },

  getLogoStyle: function() {
    return {
      color: 'green',
      fontSize: '50px',
      fontFamily: 'Cantarell'
    };
  }
});

module.exports = HeaderBar;
