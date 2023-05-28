import fonts from "../../../css/fonts.css";
import React, {useState} from "react";
import Card from "@mui/material/Card";
import theme from "../../../util/colorPallet";
import CardContent from "@mui/material/CardContent";
import {Col, Row} from "react-bootstrap";
import Avatar from "@mui/material/Avatar";
import {BsPlusLg} from "react-icons/bs";
import {AllFriendCards} from "./AllFriendCards";

export function FriendList({ user }) {
    const [hover, setHover] = useState(false);

    const handleOnMouseEnter = () => {
        setHover(true);
    };
    const handleOnMouseLeave = () => {
        setHover(false);
    };

    return (
        <div style={{ maxWidth: "85%" }}>

            <h3 className={"pb-0 m-0"} style={{ textAlign: "left" }}>
                Prijatelji
            </h3>
            <Card
                onClick={() => {
                    console.log("Add friend");
                }}
                onMouseEnter={handleOnMouseEnter}
                onMouseLeave={handleOnMouseLeave}
                sx={{
                    all: "revert",
                    backgroundColor: hover
                        ? theme.palette.primary.main
                        : "white",
                    transition: "background-color 0.5s ease",
                    cursor: hover ? "pointer" : "default",
                    marginTop: 0.5,
                    marginBottom: 0,
                    maxWidth: "100%",
                    borderTop: "4px solid" + theme.palette.primary.main,
                }}
            >
                <CardContent className={"pt-0 pb-2"} sx={{alignItems: "center", height:"100px"}}>
                    <Row xs={1} className={"justify-content-start pt-2"} style={
                        {
                            alignItems: "center",
                            height:"100%",
                        }
                    }>
                        <Col key={1} xs={3}>
                            <Avatar sx={{
                                fontSize:"3em",
                                fontWeight:"bolder",
                                bgcolor: "transparent",
                            }}>
                                <BsPlusLg color={hover ? theme.palette.secondary.main :theme.palette.primary.main}/>
                            </Avatar>
                        </Col>
                        <Col key={2} xs={5} >
                            <h5 style={
                                {
                                    color: hover ? theme.palette.secondary.main : theme.palette.primary.darker,
                                }
                            }>
                                Dodaj prijatelja
                            </h5>
                        </Col>
                    </Row>
                </CardContent>
            </Card>
            <AllFriendCards user={user}/>
        </div>
    );
}
