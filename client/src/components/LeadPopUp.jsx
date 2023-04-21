import { Modal, Form } from 'react-bootstrap';

function Modal(props) {
    function handleSubmit() {
        console.log("form submitted")
    }
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Would You Like to Speak with an Agent?
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>

                <Form.Label htmlFor="inputPassword5">Name</Form.Label>
                <Form.Control
                    type="text"
                    id="fullName"
                    aria-describedby="fullName"
                />
                <Form.Label htmlFor="inputPassword5">Password</Form.Label>
                <Form.Control
                    type="password"
                    id="inputPassword5"
                    aria-describedby="passwordHelpBlock"
                />
                <Button onClick={props.onHide}>Close</Button>
                <Button>Send</Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default Modal;