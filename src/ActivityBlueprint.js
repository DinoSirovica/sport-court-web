import {Col, Container, Row} from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import {BsCalendarEvent, BsClock, BsFlag, BsPeople} from "react-icons/bs";
import Button from "react-bootstrap/Button";
import React from "react";

export const ActivityBlueprint = ({item, index}) => {
    return (
        <Col key={index} className='mx-0'>

            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey={(index - 1).toString()} className='px-0 mx-auto my-3'>
                    <Accordion.Header>
                        <Container>
                            <Row>
                                <Col><p><b>{item.name}</b> - {item.sport}</p></Col>
                            </Row>
                            <Row className='align-items-center mx-auto my-3'>
                                <Col>
                                    <p><BsFlag/> {item.placeName}</p>
                                </Col>
                                <Col>
                                    <p><BsCalendarEvent/> {item.date}</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p><BsClock/> {item.time}</p>
                                </Col>
                                <Col>
                                    <p><BsPeople/> {item.participants.length} / {item.maxParticipants} mjesta
                                        popunjeno</p>
                                </Col>
                            </Row>
                            <Row>
                                <Accordion.Body eventKey={(index - 1).toString()} className='px-0 py-0 my-3'>
                                    <hr/>
                                    <Container>
                                        <Row>
                                            <iframe
                                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1169.3779921717487!2d15.934835296499244!3d45.80594808601676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d6cecd0e7669%3A0x4a22a0cb02b9fdfa!2sSportski%20centar%20Concordia!5e0!3m2!1shr!2shr!4v1683767741883!5m2!1shr!2shr"
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
                                <Button className='mx-0 dodajme'>Dodaj me</Button>
                            </Row>
                        </Container>
                    </Accordion.Header>
                </Accordion.Item>
            </Accordion>
        </Col>
    )

}

