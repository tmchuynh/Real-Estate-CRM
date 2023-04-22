import { Modal, Form } from 'react-bootstrap';

function CustomModal(props) {
  const { title, body, onSubmit, onHide } = props;

  function handleSubmit(e) {
    e.preventDefault();
    if (onSubmit) {
      onSubmit();
    }
  }

  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {body}
          <Button onClick={onHide}>Close</Button>
          <Button type="submit">Send</Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default CustomModal;
