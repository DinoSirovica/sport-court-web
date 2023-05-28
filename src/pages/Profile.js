import React, {useEffect, useState} from "react";
import {isAuthenticated} from "../util/auth";
import {Footer} from "../components/Footer/Footer";
import {Col, Container, Row} from "react-bootstrap";
import ProfileDetailCard from "../components/Profile/ProfileDetail";
import {getLobbiesForUser, getUserProfile, updateUser} from "../util/apiRequestHelper";

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
    }, []);
    const updateUserValues = (user) => {
        setUser(user);
    }
    async function fetchData() {
        setUser(await getUserProfile());
        setLobbies(await getLobbiesForUser(user.id));
    }

    return (<>
            <Row xs={1} md={2}  className='align-items-center mx-3 px-1 py-5 g-3'>
                <Col key={1} className='mx-0'>
                    <ProfileDetailCard user={user} userUpdate={updateUserValues}/>
                </Col>
            </Row>
            <Footer />
        </>
    );
}
