define([
  'react',
  'jsx!views/components/headerBar'

], function(React, HeaderBar) {

  var profilePage = React.createClass({
    render: function() {
      return (
          <div>
            <HeaderBar />
          </div>
      );
    }
  });

  return profilePage;
});