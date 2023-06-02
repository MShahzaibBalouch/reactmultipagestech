import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export default function ProductModal({ Product }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Button variant="primary" className='ms-3' onClick={handleShow}>
                View
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Container>
                    <Row>
                        <Col md={8}>
                            <Modal.Title><img src={Product.image} style={{ width: '200px' }} alt='img' /></Modal.Title>
                        </Col>
                    </Row>
                </Container>
                <Modal.Dialog>
                    <Container>

                        <Row>
                            <Col md={8}>
                                <Modal.Title>{Product.title}</Modal.Title>
                                <p>{Product.description}</p>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Dialog>
                <h5>PRICE :{Product.price}$</h5>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
