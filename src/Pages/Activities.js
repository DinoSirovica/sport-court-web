import TerminModal from '../ModalTermin.js';
import React, { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import {podaci,ikone} from "../terminiPodaci.js";
import Card from 'react-bootstrap/Card';
import { BsFlag,BsCalendarEvent,BsClock } from "react-icons/bs";

export const Activities = () => {
    
    const [modalShow, setModalShow] = useState(false);
    
    const [ikonaSlika,setIkona] = useState(ikone[0]);

    const [tempData, setTempData] = useState([]);

    function handleLoad(index){
        console.log(index);
        const ikona=ikone[index];
        setIkona(ikona);

    }

    const dohvatiPodatke = (...values) => {
        let temp=[...values];
        setTempData(item => [...values]);

        return setModalShow(true);
    }

    return (
        <>
            

            <Container >
                <Row xs={1} md={2} lg={8} className='align-items-center mx-auto px-5 py-5 g-9'>
                    {podaci.termini.map((item,index) => {
                        return(
                            
                        <Col key={index}>
                            <Card style={{ width: '25rem', }} onClick={() => dohvatiPodatke(Object.values(item))} className='mx-auto my-3'>
                                <Card.Img variant="top" alt=""/>
                                <Card.Body>
                                    <Card.Title>
                                        <p>{item.nazivTermina} {item.sportTag}</p>
                                    </Card.Title>
                                    <Container>
                                        <Row>
                                            <Col></Col>
                                            <Col></Col>
                                        </Row>
                                        <Row>
                                            <Col></Col>
                                            <Col></Col>
                                        </Row>
                                    </Container>
                                    
                                    <Card.Text>
                                    <p><BsFlag/> {item.nazivMjesto}</p>
                                    <p><BsCalendarEvent/> {item.datumTermina}</p>
                                    <p><BsClock/> {item.vrijemeTermina}</p>
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                        </Col>
                        )
                    })}
                    
                   
                    
                </Row>
                <Row></Row>
                <Row></Row>
            </Container>
            {
                modalShow === true ? <TerminModal /> : ''
            }
            
        </>
    );
}

