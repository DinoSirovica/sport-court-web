import React, {useState} from "react";
import Card from "@mui/material/Card";
import theme from "../../../util/colorPallet";
import CardContent from "@mui/material/CardContent";
import {Col, Row} from "react-bootstrap";
import {BsCalendar, BsClock, BsFlag, BsPeople} from "react-icons/bs";

export function AllLobbyCards({ lobbies }) {
    const [hoveredIndex, setHoverIndex] = useState(-1);
    const handleMouseEnter = (index) => {
        setHoverIndex(index);
    };

    const handleMouseLeave = () => {
        setHoverIndex(-1);
    };

    return (
        <>
            {lobbies.map((lobby, index) => (
                <Card
                    onClick={() => {
                        console.log("clicked");
                    }}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                    key={index}
                    sx={{
                        all: "revert",
                        backgroundColor: hoveredIndex === index ?
                            theme.palette.primary.main
                            :
                            "white",
                        cursor: hoveredIndex === index ? "pointer" : "",
                        transition: "background-color 0.5s ease",
                        marginTop: 0.5,
                        marginBottom: 0,
                        maxWidth: "100%",
                        borderTop: "4px solid" + theme.palette.primary.main,
                    }}
                >
                    <CardContent className={"pt-0"}>
                        <Row xs={2} className={"p-0"} >
                            <Col md={4} sm={11} xs={11} className={"p-0 m-4"}>
                                <div
                                    className={"profileLobbyNameDiv"}
                                    style={{
                                        backgroundColor:
                                            hoveredIndex === index
                                                ? theme.palette.secondary.main
                                                : theme.palette.primary.main,
                                        color:
                                            hoveredIndex === index
                                                ? theme.palette.secondary.contrastText
                                                : theme.palette.primary.contrastText,
                                    }}
                                >
                                    <span style={{ fontWeight: "bold" }}>{lobby.name}</span>
                                    <br />
                                    <span style={{ fontStyle: "italic" }}>{lobby.sport.name}</span>
                                </div>
                            </Col>
                            <Col style={{
                                color: hoveredIndex === index ? theme.palette.primary.contrastText : theme.palette.primary.darker}}>
                                <Row xs={2} style={{whiteSpace:"nowrap"}}>
                                    <Col xs={1}>
                                        <BsFlag/>
                                    </Col>
                                    <Col xs={1}>
                                        {lobby.location}
                                    </Col>
                                </Row>
                                <Row xs={2} style={{whiteSpace:"nowrap"}}>
                                    <Col xs={1}>
                                        <BsPeople/>
                                    </Col>
                                    <Col>
                                        {lobby.currentPlayers}/{lobby.maxPlayers} mjesta popunjeno
                                    </Col>
                                </Row>
                                <Row xs={2} style={{whiteSpace:"nowrap"}}>
                                    <Col xs={1}>
                                        <BsCalendar/>
                                    </Col>
                                    <Col>
                                        {lobby.date}
                                    </Col>
                                </Row>
                                <Row xs={2}>
                                    <Col xs={1}>
                                        <BsClock/>
                                    </Col>
                                    <Col style={{whiteSpace:"nowrap"}}>
                                        {lobby.startTime} - {lobby.endTime}
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </CardContent>
                </Card>
            ))}
        </>
    );
}
