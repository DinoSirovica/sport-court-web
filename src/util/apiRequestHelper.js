import axios from "axios";
import {Sport, SportCenterDTO, Lobby} from "../components/Models/Models";

const API_URL = "http://localhost:8080";

export async function getUserProfile() {
    const response = await axios.get(API_URL + '/user/' + localStorage.getItem("username"));
    return response.data;
}

export async function getLobbiesForUser(id) {
    const response = await axios.get(API_URL + '/lobby/user/' + id)
    return response.data;
}

export async function updateUser(user) {
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

    const response = await axios.put(url, userJson);
    return response.data;
}

export async function getSports() {
    const response = await axios.get(API_URL + '/sport/all');
    return response;
}

export async function getSportById(id) {
    const response = await axios.get(API_URL + '/sport/' + id);
    return response.data;
}

export async function getSportCenters(sportId) {
    const response = await axios.get(API_URL + '/sportCenter/sport/' + sportId);
    const sportCenters = response.data.map((sportCenter) => {
        const sports = sportCenter.sports.map((sport) => new Sport(sport.id, sport.name, sport.maxPlayers));
        const halls = sportCenter.halls;
        return new SportCenterDTO(
            sportCenter.id,
            sportCenter.sportCenterName,
            sportCenter.oib,
            sports,
            sportCenter.userId,
            sportCenter.location.name,
            sportCenter.address,
            sportCenter.location.zip_code,
            halls
        );
    });
    return sportCenters;
}

export async function createLobby(data) {
    const url = API_URL + '/lobby/save';
    const userId = (await getUserProfile()).id

    const lobby = new Lobby(1, data.name, data.sport, data.address, data.maxPlayers, 1, userId, data.date,
        data.startTime, data.endTime, data.hall, data.sportCenterId);

    const response = await axios.post(url, lobby);
    return response.data;
}

export async function getLobbiesByCenterId(id, hall, date) {
    const response = await axios.get(API_URL + '/lobby/center/' + id + '/' + hall + '/' + date);
    return response;
}

