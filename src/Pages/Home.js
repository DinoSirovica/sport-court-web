import "../Css/Hero.css"
import { Container, Row, Col } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { BiCalendar } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";

const Column = ({ icon, text }) => {
    return (
        <div className="column">
            <div className="column-icon">{icon}</div>
            <div className="column-text">{text}</div>
        </div>
    );
};

export const Home = () => {
    return (
        <header>
            <div class="hero-container">
                <div class="hero-image">
                    <div class="hero-image-light"></div>
                    <div class="hero-image-dark"></div>
                    <img src={require('../Images/hero.jpg')} alt="Hero" class="hero-image" />

                </div>
                <div class="hero-content">
                    <h1>Sport Court</h1>
                    <p>Uz naše iznajmljive sportske terene, možete okupiti ljude različitih interesa i dobnih skupina, stvarajući priliku za druženje, upoznavanje novih ljudi i jačanje zajednice kroz sport!</p>
                    <button class="hero-button">Odaberi sport</button>
                </div>
            </div>

            <Container>
                <Row>
                    <Col lg={4} sm={12}>
                        <Column
                            icon={<BsFillPeopleFill size={30} />}
                            text="Lorem ipsum dolor sit amet"
                        />
                        <FaArrowRight size={40} className="arrow" />
                        <Column
                            icon={<BiCalendar size={30} />}
                            text="Consectetur adipiscing elit"
                        />
                        <FaArrowRight size={40} className="arrow" />
                        <Column
                            icon={<AiFillStar size={30} />}
                            text="Sed do eiusmod tempor incididunt"
                        />
                    </Col>
                    <Col lg={4} sm={12}>
                        <Column
                            icon={<AiFillStar size={30} />}
                            text="Ut labore et dolore magna aliqua"
                        />
                        <FaArrowRight size={40} className="arrow" />
                        <Column
                            icon={<BsFillPeopleFill size={30} />}
                            text="Sed do eiusmod tempor incididunt"
                        />
                        <FaArrowRight size={40} className="arrow" />
                        <Column
                            icon={<BiCalendar size={30} />}
                            text="Consectetur adipiscing elit"
                        />
                    </Col>
                    <Col lg={4} sm={12}>
                        <Column
                            icon={<BiCalendar size={30} />}
                            text="Ut labore et dolore magna aliqua"
                        />
                        <FaArrowRight size={40} className="arrow" />
                        <Column
                            icon={<AiFillStar size={30} />}
                            text="Consectetur adipiscing elit"
                        />
                        <FaArrowRight size={40} className="arrow" />
                        <Column
                            icon={<BsFillPeopleFill size={30} />}
                            text="Sed do eiusmod tempor incididunt"
                        />
                    </Col>
                </Row>
            </Container>
        </header>
    );
}
