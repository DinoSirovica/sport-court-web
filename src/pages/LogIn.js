import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, {useState } from 'react';
import styles from "../css/Login.css"
import {Link, useLocation} from "react-router-dom";
import axios from "axios";
import {Footer} from "../components/Footer/Footer";
import {hashPassword} from "../util/password";



export const LogIn = () => {

    const location = useLocation();

    const isHome = location.pathname === "/";

    const [username, setUsername] = useState('');
    let [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault()
        hashPassword(password).then((result) => {
                axios.post("http://localhost:8080/user/auth/login",{"username" : username, "password" : result} , {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then(response => {
                        localStorage.setItem('token', response.data.token);
                        localStorage.setItem('username', response.data.username);
                        localStorage.setItem('role', response.data.role);
                        window.location.href = "/";
                    })
                    .catch(error => {
                        console.log('Failed to log in:', error);
                    });
            }
        );

    };

    return (
        <Container fluid="xs" className="align-items-center pt-5 ">
            <Row className="mb-5">
                <Col ></Col>
                <Col xs={7} md={6}>
                    <h1 className="text-center mb-4">Prijavi se</h1>
                    <div className="d-grid gap-3 pt-3">
                        <Button variant="outline-primary" className="mx-0 googleButton" >Log in with Google</Button>
                    </div>

                </Col>
                <Col ></Col>
            </Row>
            <Row className="mb-4"><h2>ili</h2></Row>
            <Row>
                <Col ></Col>
                <Col xs={7} md={6}>
                    <div>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label><h4>Korisničko ime</h4></Form.Label>
                                <Form.Control value={username} onChange={event => setUsername(event.target.value)} className="border-radius-xl" type="text" placeholder="e.g. pero.peric@email.com" />
                                <Form.Text className="text-muted">
                                    Ne dijelimo vaše informacije ni sa kim.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-4" controlId="formBasicPassword">
                                <Form.Label><h4>Lozinka</h4></Form.Label>
                                <Form.Control value={password} onChange={event => setPassword(event.target.value)} type="password" placeholder="e.g. 123456" />
                            </Form.Group>

                            <div className="d-grid gap-3">
                                <Button className="loginButton lg mx-0" type="submit">
                                    Prijavi se
                                </Button>
                                <p className="text-center">Nemaš račun?<Button variant="link" as={Link} to="/register" onClick={() => location.pathname.includes("/Register")}> Registriraj se</Button></p>
                            </div>
                        </Form>
                    </div>
                </Col>
                <Col className="px-0"></Col>

            </Row>
            <Row></Row>
            <Footer/>
        </Container>
    );
}
export default LogIn;
