import {terminModal} from "../terminModal.js" 
import React, { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

export const Activities = () => {
    
    const [modalShow, setModalShow] = React.useState(false);

    return (
        
        <Container>
            <Row>
                <Button onClick={() => setModalShow(true)}>Probaj</Button>
                <terminModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                />
            </Row>
            <Row></Row>
            <Row></Row>
        </Container>
        
    );
}

