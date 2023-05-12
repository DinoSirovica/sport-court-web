import {useEffect, useState} from "react";
import {isAuthenticated} from "../util/auth";
import {User} from "../components/Models/Models";
import axios from "axios";
import {Footer} from "../components/Footer/Footer";

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
            <h1 class="text-center pt-5">Profile Page</h1>
            <div style={{height: "530px"}}></div>
            <Footer />
        </>
    );
}
