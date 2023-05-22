import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="justify-content-md-center">
                    <Col md={6}>
                        <h5 className="footer-title">O nama</h5>
                        <p>Ovo je platforma namjenjena... </p>
                    </Col>
                    <Col md={6}>
                        <h5 className="footer-title">Navigacija</h5>
                        <ul className="list-unstyled">
                            <Link className="link" to="/"> Naslovna </Link>

                            <Link className="link" to="/activities"> Aktivnosti </Link>

                            <Link className="link" to="/about-us"> O nama </Link>

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
    )
}
