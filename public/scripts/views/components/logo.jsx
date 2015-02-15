define([
  'react'
], function(React) {

    var Logo = React.createClass({
      render: function() {
        var image = {
          backgroundImage: 'url(public/images/logo.jpg)',
          width: '100px',
          height: '100px',
          backgroundRepeat: 'no-repeat'
        }
        return (
          <div style={image}>
          </div>
        );
      }
    });

    return Logo;
});