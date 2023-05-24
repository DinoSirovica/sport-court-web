import {Col, Container, Form, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {Link, useLocation} from "react-router-dom";
import "../css/Activities.css"
import React from 'react';
import { useState } from 'react';


export const LobbyCreator = () => {

    const location = useLocation();

    const [city, setCity] = useState("");

    const handleCityChange = (event) => {
        setCity(event.target.value);
    }
        return(
            <Container>
                <Row>

                    <Col>
                        <Button className='mx-0 dodajme' variant="link" as={Link} to="/activities"
                                onClick={() => location.pathname.includes("/activities")}>Nazad
                        </Button>
                    </Col>
                    <Col>
                        <input type={"text"} placeholder="Unesi naslov"/>
                    </Col>
                    <Col>
                        <Form.Label>Mesto</Form.Label>
                        <Form.Select onChange={handleCityChange}>
                            <option value="">Izaberi mjesto</option>
                            <option value="Beograd">Beograd</option>
                            <option value="Novi Sad">Novi Sad</option>
                            <option value="Niš">Niš</option>
                        </Form.Select>
                    </Col>


                </Row>
            </Container>
        );
    }
export default LobbyCreator;
