define([
  'react',
  'jsx!views/components/logo'

], function(React, Logo) {

  var headerBar = React.createClass({
    render: function() {
      var headerBarStyle = {
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'center',
        width: '100%',
        height: '100px',
        backgroundColor: 'lightgray'
      };

      var logoStyle = {
        color: 'green',
        marginLeft: '20px',
        fontSize: '30px'
      };

      return (
        <div style={headerBarStyle}>
          <div className="logo" style={logoStyle}>
            Loop
          </div>
        </div>
      );
    }
  });

  return headerBar;
});