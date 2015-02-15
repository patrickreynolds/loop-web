define([
  'react',
  'font!google,families:[Tangerine,Cantarell,Yanone Kaffeesatz:700]'

], function(React) {

  var headerBar = React.createClass({
    render: function() {
      var headerBarStyle,
          headerBarContainerStyle,
          logoStyle;

      headerBarStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100px',
        backgroundColor: 'lightgray'
      };

      headerBarContainerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '95%'
      };

      logoStyle = {
        color: 'green',
        fontSize: '50px',
        fontFamily: 'Cantarell'
      };

      return (
        <div style={headerBarStyle}>
          <div style={headerBarContainerStyle}>
            <div className="logo" style={logoStyle}>
              Loop
            </div>
            <div>
              <button>Sign In</button>
              <button>Sign Up</button>
            </div>
          </div>
        </div>
      );
    }
  });

  return headerBar;
});