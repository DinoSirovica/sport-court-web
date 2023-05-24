import React, {useEffect, useState} from "react";
import {isAuthenticated} from "../util/auth";
import {User} from "../components/Models/Models";
import axios from "axios";
import {Footer} from "../components/Footer/Footer";
import {Col, Container, Row} from "react-bootstrap";
import ProfileDetailCard from "../components/Profile/ProfileDetail";

export const Profile = () => {
    const [user,setUser] = useState({});
    const [lobbies,setLobbies] = useState({});

    useEffect(() => {
        if (isAuthenticated()){
            fetchData();
        }
        else{
            console.log("Not authenticated");
            window.location.href = "/Login";
        }
    }
    , []);
    async function fetchData() {
        const response = await axios.get('http://localhost:8080/user/'+ localStorage.getItem("username")).then(
            result => {
                const user = result.data;
                setUser(user);
            }
        )
        console.log(user.id);
        const response2 = await axios.get('http://localhost:8080/lobby/user/'+ user.id).then(
            result => {
                const lobbies = result.data;
                setLobbies(lobbies);
                console.log(lobbies);
            });
    }

    return (<>
            <Row xs={1} md={2}  className='align-items-center mx-3 px-1 py-5 g-3'>
                <Col key={1} className='mx-0'>
                    <ProfileDetailCard user={user} />
                </Col>
            </Row>
            <Footer />
        </>
    );
}
