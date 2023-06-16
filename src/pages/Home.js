import "../css/Hero.css"
import {Container, Row, Col} from "react-bootstrap";
import {BiFootball} from "react-icons/bi";
import {HiArrowNarrowRight, HiCursorClick, HiUserGroup} from "react-icons/hi"
import {BsFillCalendar2CheckFill} from "react-icons/bs"
import "../css/HomePage.css"
import "../css/fonts.css"
import {SportButton} from '../components/Sport/Sport';
import {Link} from "react-router-dom";

const Column = ({icon, text, miniIcon, arrow}) => {
    return (
        <div className="column">

            <div className="column-text">{text}</div>
            <div className="column-icon">{icon}</div>
            <div className="column-arrow">{arrow}</div>
            <div className="column-miniIcon">{miniIcon}</div>
        </div>
    );
};

export const Home = () => {

    return (
        <div>
            <div class="hero-container">
                <div class="hero-image">
                    <div class="hero-image-light"></div>
                    <div class="hero-image-dark"></div>
                    <img src={require('../images/hero.jpg')} alt="Hero" class="hero-image"/>

                </div>
                <div class="hero-content">
                    <h1>Sport Court</h1>
                    <p>Uz naše iznajmljive sportske terene, možete okupiti ljude različitih interesa i dobnih skupina,
                        stvarajući priliku za druženje, upoznavanje novih ljudi i jačanje zajednice kroz sport!</p>
                    <button class="hero-button">Odaberi sport</button>
                </div>
            </div>

            <Container>
                <Row className="textAlign">
                    <Col lg={12} sm={12}>
                        <h2 className="h2Move">Kako koristiti?</h2>
                    </Col>
                    <Col lg={3} sm={12}>
                        <Column
                            text="Odaberi sport"
                            icon={<BiFootball size={85}/>}
                            miniIcon={<HiCursorClick size={30}/>}
                        />
                    </Col>
                    <Col lg={1} sm={12}>
                        <Column
                            arrow={<HiArrowNarrowRight size={85}/>}
                        />
                    </Col>
                    <Col lg={4} sm={12}>
                        <Column
                            icon={<HiUserGroup size={85}/>}
                            text="Upoznaj nove ljude"
                        />
                    </Col>
                    <Col lg={1} sm={12}>
                        <Column
                            arrow={<HiArrowNarrowRight size={85}/>}
                        />
                    </Col>
                    <Col lg={3} sm={12}>
                        <Column
                            icon={<BsFillCalendar2CheckFill size={75}/>}
                            text="Rezerviraj termin"
                        />
                    </Col>
                </Row>

                <Row className="textAlign">
                    <Col lg={12} sm={12} style={{marginTop: "30px"}}>
                        <h2 className="h2Move">Naš izbor sportova</h2>
                        <h3> Odaberi sport i rezerviraj</h3>
                    </Col>
                    <Col lg={3} md={6}>
                        <div>
                            <SportButton image={require('../images/nogomet.jpg')} altText="Nogomet"/>
                        </div>
                    </Col>
                    <Col lg={3} md={6}>
                        <div>
                            <SportButton image={require('../images/kosarka.jpg')} altText="Košarka"/>
                        </div>
                    </Col>
                    <Col lg={3} md={6}>
                        <div>
                            <SportButton image={require('../images/badminton.jpg')} altText="Badminton"/>
                        </div>
                    </Col>
                    <Col lg={3} md={6}>
                        <div>
                            <SportButton image={require('../images/odbojka.jpg')} altText="Odbojka"/>
                        </div>
                    </Col>

                    <Col lg={3} md={6}>
                        <div>
                            <SportButton image={require('../images/plivanje.jpg')} altText="Plivanje"/>
                        </div>
                    </Col>
                    <Col lg={3} md={6}>
                        <div>
                            <SportButton image={require('../images/rukomet.jpg')} altText="Rukomet"/>
                        </div>
                    </Col>
                    <Col lg={3} md={6}>
                        <div>
                            <SportButton image={require('../images/stolni.jpg')} altText="Stolni"/>
                        </div>
                    </Col>
                    <Col lg={3} md={6}>
                        <div>
                            <SportButton image={require('../images/vaterpolo.jpg')} altText="Vaterpolo"/>
                        </div>
                    </Col>
                </Row>
            </Container>

            <footer className="footer">
                <Container>
                    <Row className="justify-content-md-center">
                        <Col md={6}>
                            <h5 className="footer-title">O nama</h5>
                            <p>Ovo je platforma namjenjena </p>
                        </Col>
                        <Col md={6}>
                            <h5 className="footer-title">Navigacija</h5>
                            <ul className="list-unstyled">
                                <Link className="link" to="/"> Naslovna </Link>

                                <Link className="link" to="/activities"> Aktivnosti </Link>

                                <Link className="link" to="/aboutUS"> O nama </Link>

                            </ul>
                        </Col>

                    </Row>
                    <Row className="justify-content-md-center">
                        <Col md={6} className="text-center">
                            <p>&copy; 2023 Sport Court. All Rights Reserved.</p>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </div>
    );
}
