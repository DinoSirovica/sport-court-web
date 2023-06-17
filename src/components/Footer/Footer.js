import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {isAuthenticated} from "../../util/auth";

export const Footer = () => {
    if(isAuthenticated())
        return (
            <footer className="footer">
                <Container>
                    <Row className="justify-content-center text-center mb-5 p-1">
                        <Col md={3}>
                            <Link className="link" to="/"> Naslovna </Link>
                        </Col>
                        <Col md={3}>
                            <Link className="link" to="/activities"> Aktivnosti </Link>
                        </Col>
                        <Col md={3}>
                            <Link className="link" to="/about-us"> O nama </Link>
                        </Col>
                        <Col md={3}>
                            <Link className="link" to="/profile"> Profil </Link>
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
    else
        return (
            <footer className="footer">
                <Container>
                    <Row className="justify-content-center text-center mb-5 p-1">
                        <Col md={4}>
                            <Link className="link" to="/"> Naslovna </Link>
                        </Col>
                        <Col md={4}>
                            <Link className="link" to="/activities"> Aktivnosti </Link>
                        </Col>
                        <Col md={4}>
                            <Link className="link" to="/about-us"> O nama </Link>
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
