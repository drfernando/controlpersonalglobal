import React from "react";
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

export default class VacantModal extends React.Component {
  state = {
    isOpen: false,
  };
  openModal = () => this.setState({ isOpen: true });
  closeModal = () => this.setState({ isOpen: false });
  render() {
    return (
      <Container>
        <Row className="section centered" lg={12}>
          <div>
            <Button className="me-2" onClick={this.openModal}>
              Postularme
            </Button>
          </div>
        </Row>
        <Modal
          show={this.state.isOpen}
          fullscreen={true}
          onHide={this.closeModal}
        >
          <Modal.Header closeButton>
            <Modal.Title>{this.props.vacant.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>Modal body content</Modal.Body>
        </Modal>
      </Container>
    );
  }
}
