import axios from "axios";
import {useState} from "react";

const API_URL = "http://localhost:8080";

export async function getUserProfile() {
    const response = await axios.get(API_URL + '/user/' + localStorage.getItem("username"));
    return response.data;
}

export async function getLobbiesForUser(id){
    // const response = await axios.get(API_URL + '/lobby/user/'+ id)
    // return response.data;
}

export async function updateUser(user){
    const url = API_URL + '/user/update/' + user.username;
     const userJson = {
        "id": user.id,
        "username": user.username,
        "firstname": user.firstname,
        "lastname": user.lastname,
        "phoneNumber": user.phoneNumber,
        "email": user.email,
        "password": user.password,
        "role": user.role,
        "imageData": user.imageData,
        "friendIds": user.friendIds,
    }

    const response = await axios.put(url, userJson)
        .catch(error => {
            console.error(error);
        });
    return response.data;
}
