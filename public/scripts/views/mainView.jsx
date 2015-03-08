// this is the main app that lives in the root of the views folder
var React = require('react'),
    ProfileView = require('views/pages/profile/ProfileView'),
    Modal = require('react-bootstrap').Modal,
    Button = require('react-bootstrap').Button,
    app;

function handleHide() {
  alert('Close me!')
}

var modalInstance = (
    <div className="static-modal">
      <Modal title="Modal title"
        bsStyle="primary"
        backdrop={false}
        animation={false}
        onRequestHide={handleHide}>
        <div className="modal-body">
          One fine body...
        </div>
        <div className="modal-footer">
          <Button>Close</Button>
          <Button bsStyle="primary">Save changes</Button>
        </div>
      </Modal>
    </div>
  );

app = React.createClass({
  getInitialState: function() {
    return {
      profileActive: false
    };
  },

  render: function() {
    return (
      <div>
        <ProfileView />
        {modalInstance}
      </div>
    );
  }
});

module.exports = app;