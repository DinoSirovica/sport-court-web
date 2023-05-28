import React, {useEffect, useState} from "react";
import Card from "@mui/material/Card";
import theme from "../../../util/colorPallet";
import CardContent from "@mui/material/CardContent";
import {Col, Row} from "react-bootstrap";
import Avatar from "@mui/material/Avatar";
import {getImageFromBase64} from "../../../util/helper";
import {BsEnvelopeFill, BsTelephoneFill} from "react-icons/bs";
import fonts from "../../../css/fonts.css";


export function AllFriendCards({user}) {
    const [hoveredIndex, setHover] = useState(-1);
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        if (user.friends) {
            setFriends(user.friends);
        }
    }, [user, friends]);
    const handleOnMouseEnter = (index) => {
        setHover(index);
    };
    const handleOnMouseLeave = () => {
        setHover(-1);
    };

    return (
        <div className="d-flex justify-content-center">
            <div className="w-100" >
                {friends.map((friend, index) => (
                    <Card
                        onClick={() => {
                            // todo add friend click
                            console.log("clicked on a friend");
                        }}
                        onMouseEnter={() => handleOnMouseEnter(index)}
                        onMouseLeave={handleOnMouseLeave}
                        key={index}
                        sx={{
                            all: "revert",
                            backgroundColor:
                                hoveredIndex === index
                                    ? theme.palette.primary.main
                                    : "white",
                            cursor: hoveredIndex === index ? "pointer" : "",
                            transition: "background-color 0.5s ease",
                            marginTop: 0.5,
                            marginBottom: 0,
                            maxWidth: "100%",
                            borderTop: "3px solid" + theme.palette.primary.main,
                        }}
                    >
                        <CardContent className="pt-2 pb-1" sx={{ alignItems: "center", height: "100%" }}>
                            <Row xs={1} style={{ height: "100%" }} className="align-items-center">
                                <Col sm={4} xs={12} className="p-2 pe-0 text-center">
                                    <Avatar sx={{width: "70px", height: "70px" ,margin: "0 auto"}} src={getImageFromBase64(friend.imageData)}></Avatar>
                                </Col>
                                <Col sm={8} xs={12} className="text-center">
                                    <div className="d-flex flex-column justify-content-center h-100">
                                        <div style={{ fontSize: "1.7em", color: hoveredIndex === index ? theme.palette.secondary.main : theme.palette.primary.darker }}>
                                            {friend.firstname + " " + friend.lastname}
                                        </div>
                                        <div style={{ fontSize: "1em", color: hoveredIndex === index ? theme.palette.secondary.main : theme.palette.primary.darker }}>
                                            <BsTelephoneFill className="me-1" />
                                            {friend.phoneNumber}
                                        </div>
                                        <div style={{ fontSize: "1em", color: hoveredIndex === index ? theme.palette.secondary.main : theme.palette.primary.darker }}>
                                            <BsEnvelopeFill className="me-1" />
                                            {friend.email}
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </CardContent>

                    </Card>
                ))}
            </div>
        </div>
    );
}
