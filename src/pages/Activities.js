import React, {useState} from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import '../css/Activities.css';
import Dropdown from 'react-bootstrap/Dropdown';
import {isAuthenticated} from '../util/auth';
import {Footer} from '../components/Footer/Footer';
import {ActivityBlueprint} from '../ActivityBlueprint';
import {bookingData} from '../mockData/bookings.js';

export const Activities = () => {
    const isLoggedin = isAuthenticated();
    const [visibleCount, setVisibleCount] = useState(2); // Number of initially visible ActivityBlueprints

    const handleToggleVisibility = () => {
        setVisibleCount((prevVisibleCount) => (prevVisibleCount === 2 ? bookingData.bookings.length : 2));
    };

    if (!isLoggedin) {
        // Remove the exclamation mark if you want to test the Aktivnosti page
        return (
            <>
                <Container>
                    <Row>
                        <Col>
                            <Container>
                                <Row>
                                    <h4>Aktivnosti</h4>
                                </Row>
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
                                    <Col></Col>
                                </Row>
                            </Container>
                            <hr/>
                        </Col>
                    </Row>
                    <Row xs={1} md={2} className="align-items-center mx-3 px-1 py-5 g-3">
                        {bookingData.bookings.slice(0, visibleCount).map((item, index) => (
                            <ActivityBlueprint item={item} index={index}/>
                        ))}
                    </Row>
                    {bookingData.bookings.length > 2 && (
                        <Row className="text-center">
                            <Button className="showMorePosition" variant="primary" onClick={handleToggleVisibility}>
                                {visibleCount === 2 ? 'Show More' : 'Show Less'}
                            </Button>
                        </Row>
                    )}
                </Container>
                <Footer/>
            </>
        );
    } else {
        return (
            <>
                <Container>
                    <Row>
                        <Col className="mb-5">
                            <h1 className="text-center unothorizedAccess">
                                Prijavi se da pristupiš ovoj stranici
                            </h1>
                        </Col>
                    </Row>
                </Container>
                <Footer/>
            </>
        );
    }
};
