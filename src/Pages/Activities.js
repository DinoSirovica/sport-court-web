import React, { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import {podaci} from "../terminiPodaci.js";
import Card from 'react-bootstrap/Card';
import { BsFlag,BsCalendarEvent,BsClock,BsPeople } from "react-icons/bs";
import styles from "../Css/Activities.css"
import Accordion from 'react-bootstrap/Accordion';
import Dropdown from 'react-bootstrap/Dropdown';


export const Activities = () => {
    

    return (
        <>
            <Container >
                <Row>
                    <Col>
                    <h4>Aktivnosti</h4>
                    <Container>
                        <Row>

                            <Col>
                                <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        Datumi termina
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                            <Col>
                                <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        Svi Sportovi
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                            <Col>
                                <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        Sve sportske dvorane
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                           
                        </Row>
                    </Container>
                    <hr/>
                    </Col>
                    
                </Row>
                <Row xs={1} md={2}  className='align-items-center mx-3 px-1 py-5 g-3'>
                    
                    {podaci.termini.map((item,index) => {
                        return(
                            
                        <Col key={index} className='mx-0'>
                            
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey={(index-1).toString()} className='px-0 mx-auto my-3'>
                                <Accordion.Header>
                                        <Container >
                                            <Row >
                                                <Col><p><b>{item.nazivTermina}</b> - {item.vrstaSporta}</p></Col>
                                            </Row>
                                            <Row className='align-items-center mx-auto my-3'>
                                                <Col>
                                                    <p><BsFlag/> {item.nazivMjesto}</p>
                                                </Col>
                                                <Col>
                                                    <p><BsCalendarEvent/> {item.datumTermina}</p>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <p><BsClock/> {item.vrijemeTermina}</p>
                                                </Col>
                                                <Col>
                                                    <p><BsPeople/> {item.osobe.length} / {item.ukupnoMjesta} mjesta popunjeno</p>
                                                </Col>
                                            </Row>
                                            <Row>
                                            <Accordion.Body eventKey={(index-1).toString()} className='px-0 py-0 my-3'>
                                                    <hr/>
                                                    <Container>
                                                        <Row>
                                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1169.3779921717487!2d15.934835296499244!3d45.80594808601676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d6cecd0e7669%3A0x4a22a0cb02b9fdfa!2sSportski%20centar%20Concordia!5e0!3m2!1shr!2shr!4v1683767741883!5m2!1shr!2shr" 
                                                            width="250" 
                                                            height="150" 
                                                            allowfullscreen="" 
                                                            loading="lazy" 
                                                            referrerpolicy="no-referrer-when-downgrade">
                                                            </iframe>
                                                        </Row>
                                                        <Row>
                                                            
                                                        </Row>
                                                    </Container>
                                            </Accordion.Body>
                                            </Row>
                                            <Row>
                                                <Button className='mx-0 dodajme' >Dodaj me</Button>
                                            </Row>
                                        </Container>
                                    </Accordion.Header>
                            </Accordion.Item>
                            </Accordion>
                        </Col>
                        )
                        
                    })}
                    
                    
                    
                </Row>
                
                <Row></Row>
                
            </Container> 
        </>
    );
}

