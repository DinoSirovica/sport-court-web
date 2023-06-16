import React, {useEffect, useState} from "react";
import {isAuthenticated} from "../util/auth";
import {Footer} from "../components/Footer/Footer";
import {Col, Row} from "react-bootstrap";
import ProfileDetailCard from "../components/Profile/ProfileDetail";
import {getLobbiesForUser, getUserProfile} from "../util/apiRequestHelper";
import {ProfileLobbyList} from "../components/Profile/Lobbies/ProfileLobbyList";
import {FriendList} from "../components/Profile/Friends/FriendList";


export const Profile = () => {
    const [user, setUser] = useState({});
    const [lobbies, setLobbies] = useState([]);

    useEffect(() => {
        if (isAuthenticated()) {
            fetchData();
        } else {
            window.location.href = "/Login";
        }
    }, []);

    const updateUserValues = (user) => {
        setUser(user);
    };

    async function fetchData() {
        const userProfile = await getUserProfile();
        setUser(await userProfile);
        const userLobbies = await getLobbiesForUser(userProfile.id);
        setLobbies(userLobbies);
    }

    return (<>
            <Row xs={1} sm={1} md={3} className='align-top justify-content-around  px-5 py-5 g-3'>
                <Col key={1} className='mx-0 p-0 text-center'>
                    <ProfileDetailCard user={user} userUpdate={updateUserValues}/>
                </Col>
                <Col key={2} className='mx-0 p-0'>
                    <ProfileLobbyList lobbies={lobbies}/>
                </Col>
                <Col key={3} className='mx-0'>
                    <FriendList user={user}/>
                </Col>
            </Row>
            <Footer/>
        </>
    );
}
