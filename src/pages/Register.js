
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, {useState } from 'react';
import styles from "../css/Login.css"
import InputGroup from 'react-bootstrap/InputGroup';
import { Link, useLocation } from "react-router-dom";
import {Footer} from "../components/Footer/Footer";
import {User} from "../components/Models/Models";
import axios from "axios";
import {hashPassword} from "../util/password";

export function Register() {
  
  const location = useLocation();

  const isHome = location.pathname === "/";
  
    const [validated, setValidated] = useState(false);
    const [username, setUsername] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');

    const handleSubmit = (event) => {
        const form = event.currentTarget;
      if (form.checkValidity() === true) {
        event.stopPropagation();
      }
  
      setValidated(true);
      sendUser(event);
    };

    function sendUser(event){
        if(password !== passwordRepeat) {
            alert("Passwords do not match!");
        }
        else{
            event.preventDefault();
            hashPassword(password).then((result) => {
                const user = new User(1,username, firstname, lastname, phoneNumber, email,result);
                axios.post("http://localhost:8080/user/save", user, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then(response => {
                        window.location.href = "/login";
                    })
                    .catch(error => {
                        console.log('Error creating user:', error);
                    });
            });
        }
    }

  return (
    <>
       <Container fluid="xs" className="align-items-center pt-5 ">
            <Row className="mb-5">
                <Col ></Col>
                <Col xs={7} md={6}>
                    <h1 className="text-center">Kreiraj korisnički račun</h1>                    
                </Col>
                <Col ></Col>
            </Row>
            <Row>
            <Col ></Col>
            <Col xs={7} md={6}>
                <div>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group  controlId="validationCustom01">
                          <Form.Label>Ime</Form.Label>
                          <Form.Control
                            required
                            type="text"
                            placeholder="Pero"
                            value={firstname}
                            onChange={(e) => setFirstname(e.target.value)}
                          />
                          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group  controlId="validationCustom02">
                            <Form.Label>Prezime</Form.Label>
                            <Form.Control
                              required
                              type="text"
                              placeholder="Peric"
                              value={lastname}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                          </Form.Group>
                            <Form.Group  controlId="validationCustom03">
                            <Form.Label>Broj telefona</Form.Label>
                            <Form.Control
                              required
                              type="text"
                              placeholder="1122334455"
                              value={phoneNumber}
                              onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group  controlId="validationCustom03">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                required
                                type="email"
                                placeholder="pero.peric@primjer.hr"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="validationCustomUsername">
                          <Form.Label>Korisničko ime</Form.Label>
                          <InputGroup hasValidation>
                            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                            <Form.Control
                              type="text"
                              placeholder="pero123"
                              aria-describedby="inputGroupPrepend"
                              required
                              value={username}
                              onChange={(e) => setUsername(e.target.value)}
                            />
                            <Form.Control.Feedback type="invalid">
                              Please choose a username.
                            </Form.Control.Feedback>
                          </InputGroup>
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Lozinka</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="123456"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Ponovi lozinku</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="123456"
                                required
                                value={passwordRepeat}
                                onChange={(e) => setPasswordRepeat(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Check
                              required
                              name="terms"
                              label="Prihvaćam pravila privatnosti i uvjete korištenja"
                              feedbackType="invalid"
                              id="validationFormik0"
                            />
                      </Form.Group>
                        <div className="d-grid gap-3">
                            <Button className="loginButton lg mx-0" type="submit">
                            Registriraj se
                        </Button>
                        <p className="text-center">Imaš račun?<Button variant="link" as={Link} to="/Login" onClick={() => location.pathname.includes("/Login")}> Prijavi se</Button></p>
                        </div>
                    </Form>
                </div>
            </Col>
            <Col className="px-0"></Col>
            
            </Row>
            <Row></Row>
           <Footer />
      </Container>
    </>
  );
}
export default Register;
