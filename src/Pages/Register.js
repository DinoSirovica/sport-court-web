
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useEffect, useState } from 'react';
import styles from "../Css/Login.css"
import InputGroup from 'react-bootstrap/InputGroup';
import { Link, useLocation } from "react-router-dom";

export function Register() {
  
  const location = useLocation();

  const isHome = location.pathname === "/";
  
    const [validated, setValidated] = useState(false);
  
    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };
    

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
                    <Form>
                        <Form.Group  controlId="validationCustom01">
                          <Form.Label>Ime</Form.Label>
                          <Form.Control
                            required
                            type="text"
                            placeholder="First name"
                            defaultValue="Mark"
                          />
                          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group  controlId="validationCustom02">
                            <Form.Label>Prezime</Form.Label>
                            <Form.Control
                              required
                              type="text"
                              placeholder="Last name"
                              defaultValue="Otto"
                            />
                          </Form.Group>
                            <Form.Group  controlId="validationCustom03">
                            <Form.Label>Broj telefona</Form.Label>
                            <Form.Control
                              required
                              type="text"
                              placeholder="Last name"
                              defaultValue="Otto"
                            />
                          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="validationCustomUsername">
                          <Form.Label>Korisničko ime</Form.Label>
                          <InputGroup hasValidation>
                            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                            <Form.Control
                              type="text"
                              placeholder="Username"
                              aria-describedby="inputGroupPrepend"
                              required
                            />
                            <Form.Control.Feedback type="invalid">
                              Please choose a username.
                            </Form.Control.Feedback>
                          </InputGroup>
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Lozinka</Form.Label>
                            <Form.Control type="password" placeholder="e.g. 123456" />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Ponovi lozinku</Form.Label>
                            <Form.Control type="password" placeholder="e.g. 123456" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Check
                              required
                              name="terms"
                              label="Agree to terms and conditions"                              
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
      </Container>
    </>
  );
}
export default Register;
