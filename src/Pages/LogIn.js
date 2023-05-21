import {Col, Container, Row} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React from 'react';
import {Link, useLocation} from "react-router-dom";
import "../Css/Login.css"

export const LogIn = () => {

    const location = useLocation();

    const isHome = location.pathname === "/";

    return (
        <Container fluid="xs" className="align-items-center pt-5 ">
            <Row className="mb-5">
                <Col></Col>
                <Col xs={7} md={6}>
                    <h1 className="text-center">Prijavi se</h1>
                    <div className="d-grid gap-3 pt-3">
                        <Button variant="outline-primary" className="mx-0 googleButton">Log in with google</Button>
                    </div>

                </Col>
                <Col></Col>
            </Row>
            <Row className="mb-4"><h2>ili</h2></Row>
            <Row>
                <Col></Col>
                <Col xs={7} md={6}>
                    <div>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label><h4>Korisnička oznaka</h4></Form.Label>
                                <Form.Control className="border-radius-xl" type="email"
                                              placeholder="e.g. pero.peric@email.com"/>
                                <Form.Text className="text-muted">
                                    Ne dijelimo vaše informacije ni sa kim.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label><h4>Lozinka</h4></Form.Label>
                                <Form.Control type="password" placeholder="e.g. 123456"/>
                            </Form.Group>

                            <div className="d-grid gap-3">
                                <Button className="loginButton lg mx-0" type="submit">
                                    Prijavi se
                                </Button>
                                <p className="text-center">Nemaš račun?<Button variant="link" as={Link} to="/Register"
                                                                               onClick={() => location.pathname.includes("/Register")}> Registriraj
                                    se</Button></p>
                            </div>
                        </Form>
                    </div>
                </Col>
                <Col className="px-0"></Col>

            </Row>
            <Row></Row>
        </Container>
    );
}
export default LogIn;