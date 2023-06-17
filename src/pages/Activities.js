import React, {useState} from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import '../css/Activities.css';
import Dropdown from 'react-bootstrap/Dropdown';
import {isAuthenticated} from '../util/auth';
import {Footer} from '../components/Footer/Footer';
import {ActivityBlueprint} from '../components/Activities/ActivityBlueprint';
import {bookingData} from '../mockData/bookings.js';
import {Link, useLocation} from "react-router-dom";


export const Activities = () => {
    const isLoggedin = isAuthenticated();
    const [numOfVisibleActivityBlueprints, setNumOfVisibleActivityBlueprints] = useState(6);

    const location = useLocation();
    const handleToggleVisibility = () => {
        setNumOfVisibleActivityBlueprints((prevVisibleCount) => (prevVisibleCount === numOfVisibleActivityBlueprints ? (numOfVisibleActivityBlueprints+6) : 3));
    };
    if (isLoggedin) {
        return (
            <>
                <Container>
                    <Row>
                        <Col>
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
                                                Sportovi
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
                                                Sportske dvorane
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>

                                    </Col>
                                    <Col>
                                        <Button className="btn-primary dropdown" variant="link" as={Link}
                                                to="/lobbyCreator"
                                                onClick={() => location.pathname.includes("/LobbyCreator")}>
                                            Nova aktivnost
                                        </Button>
                                    </Col>
                                </Row>
                            </Container>
                            <hr/>
                        </Col>
                    </Row>
                    <Row xs={1} md={3} className="align-items-center mx-3 px-1 py-5 g-3">
                        {bookingData.bookings.slice(0, numOfVisibleActivityBlueprints).map((item, index) => (
                            <ActivityBlueprint item={item} index={index}/>
                        ))}
                    </Row>
                    {bookingData.bookings.length > 3 && (
                        <Row className="text-center">
                            <Button className="showMorePosition" variant="primary" onClick={handleToggleVisibility}>
                                {numOfVisibleActivityBlueprints === numOfVisibleActivityBlueprints ? 'Prikaži više' : 'Prikaži manje'}
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
