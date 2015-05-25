var Modal = require('react-bootstrap').Modal;
var Button = require('react-bootstrap').Button;


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

module.exports = modalInstance;