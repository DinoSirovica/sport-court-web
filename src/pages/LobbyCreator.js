import { Col, Container, Row } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "../css/LobbyCreation/LobbyCreator.css";
import "../css/fonts.css";
import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import theme from "../util/colorPallet";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import LobbyCalendar from "../components/LobbyCalendar/LobbyCalendar";
import { Footer } from "../components/Footer/Footer";
import AddIcon from "@mui/icons-material/Add";
import { TimePicker } from "../components/LobbyCalendar/TimePicker";

export const LobbyCreator = () => {
    const location = useLocation();
    const [sport, setSport] = useState("none");
    const [city, setCity] = useState("none");
    const [sportCenter, setSportCenter] = useState("none");
    const [hall, setHall] = useState("none");
    const [lobbyName, setLobbyName] = useState("");
    const [date, setDate] = useState(null);
    const [endTime, setEndTime] = useState(null);
    const [startTime, setStartTime] = useState(null);

    const handleCityChange = (event) => {
        setCity(event.target.value);
    };
    const handleNameChange = (event) => {
        setLobbyName(event.target.value);
    };
    const handleSportChange = (event) => {
        setSport(event.target.value);
    };
    const handleSportCenterChange = (event) => {
        setSportCenter(event.target.value);
    };
    const handleHallChange = (event) => {
        setHall(event.target.value);
    };
    const handleDateChange = (date) => {
        setDate(date);
    };
    const createLobby = () => {
        console.log("Kreiraj lobby");
        console.log("Naziv: " + lobbyName);
        console.log("Sport: " + sport);
        console.log("Grad: " + city);
        console.log("Sport centar: " + sportCenter);
        console.log("Dvorana: " + hall);
        console.log("Datum:");
        console.log(date);
        console.log("Vrijeme: " + startTime + " - " + endTime);
    };
    const handleTimeChange = (times) => {
        times.sort();
        let value = times[0];

        for (let i = 0; i < times.length; i++) {
            times.sort();
            if (value !== times[i]) {
                console.log("Vrijednosti moraju biti povezane!");
                setEndTime(null);
            } else {
                const lastTime = parseInt(times[times.length - 1]); // Convert the last time to a number
                const endTime = lastTime + 1 + ":00:00";
                setEndTime(endTime);
                setStartTime(times[0] + ":00:00");
            }
            value++;
        }
    };

    return (
        <>
            <Container style={{ minWidth: "90%" }}>
                <Row className={"mt-5 mx-5 g-5"}>
                    <Col xs={12} md={3} className={"m-0"}>
                        <Row>
                            <Button
                                startIcon={<ArrowBackIcon />}
                                className="p-3"
                                sx={{
                                    bgcolor: theme.palette.primary.main,
                                    color: theme.palette.primary.contrastText,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: "100%",
                                    textDecoration: "none",
                                    ":hover": {
                                        bgcolor: theme.palette.primary.dark,
                                        color: theme.palette.primary.contrastText,
                                    },
                                }}
                                variant="link"
                                as={Link}
                                to="/activities"
                                onClick={() => location.pathname.includes("/activities")}
                            >
                                Sve aktivnosti
                            </Button>
                        </Row>
                        <Row>
                            <div className={"mt-4"}>
                                <h4>Kratke upute za kreiranje aktivnosti:</h4>
                                <ol className="koraci-za-kreiranje list-unstyled">
                                    <li>
                                        <span>1.</span> Napišiti naslov
                                    </li>
                                    <li>
                                        <span>2.</span> Odaberi sport i lokaciju
                                    </li>
                                    <li>
                                        <span>3.</span> Na kalendaru odaberi željeni datum
                                    </li>
                                    <li>
                                        <span>4.</span> Desno odaberi željeno vrijeme
                                    </li>
                                    <li>
                                        <span>5.</span> Kreiraj aktivnost
                                    </li>
                                </ol>
                            </div>
                        </Row>
                    </Col>
                    <Col xs={12} md={6} className={"my-0"}>
                        <input
                            className={"input-naziv"}
                            type={"text"}
                            onChange={handleNameChange}
                            placeholder="Naziv"
                        />
                        <Row>
                            <Col xs={6} md={3}>
                                <FormControl
                                    disabled={lobbyName === ""}
                                    sx={{
                                        m: 1,
                                        width: "100%",
                                        bgcolor: "#1A6A69",
                                        borderRadius: "15px",
                                        opacity: lobbyName === "" ? 0.8 : 1,
                                        "& .MuiSelect-icon": {
                                            color: theme.palette.primary.contrastText,
                                        },
                                    }}
                                >
                                    <InputLabel
                                        id="sportLabel"
                                        sx={{
                                            color: "#fff",
                                        }}
                                    ></InputLabel>
                                    <Select
                                        sx={{ color: "#fff", borderRadius: "15px" }}
                                        id="sportLabel"
                                        label={"Sport"}
                                        value={sport}
                                        onChange={handleSportChange}
                                    >
                                        <MenuItem value="none" disabled>
                                            <em>Sport</em>
                                        </MenuItem>
                                        <MenuItem value={"Nogomet"}>Nogomet</MenuItem>
                                        <MenuItem value={"Kosarka"}>Košarka</MenuItem>
                                    </Select>
                                </FormControl>
                            </Col>
                            <Col xs={6} md={3}>
                                <FormControl
                                    disabled={sport === "none"}
                                    sx={{
                                        m: 1,
                                        width: "100%",
                                        borderRadius: "15px",
                                        bgcolor: "#1A6A69",
                                        opacity: sport === "none" ? 0.8 : 1,
                                        "& .MuiSelect-icon": {
                                            color: theme.palette.primary.contrastText,
                                        },
                                    }}
                                >
                                    <InputLabel
                                        id="cityLabel"
                                        sx={{ color: "#fff" }}
                                    ></InputLabel>
                                    <Select
                                        sx={{ color: "#fff", borderRadius: "15px" }}
                                        id="cityLabel"
                                        label={"Grad"}
                                        value={city}
                                        onChange={handleCityChange}
                                    >
                                        <MenuItem value="none" disabled>
                                            <em>Grad</em>
                                        </MenuItem>
                                        <MenuItem value={"Zagreb"}>Zagreb</MenuItem>
                                        <MenuItem value={"Split"}>Split</MenuItem>
                                        <MenuItem value={"Osjek"}>Osjek</MenuItem>
                                    </Select>
                                </FormControl>
                            </Col>
                            <Col xs={6} md={3}>
                                <FormControl
                                    disabled={city === "none"}
                                    sx={{
                                        m: 1,
                                        width: "100%",
                                        bgcolor: "#1A6A69",
                                        borderRadius: "15px",
                                        opacity: city === "none" ? 0.8 : 1,
                                        "& .MuiSelect-icon": {
                                            color: theme.palette.primary.contrastText,
                                        },
                                    }}
                                >
                                    <InputLabel
                                        id="centarLabel"
                                        sx={{ color: "#fff" }}
                                    ></InputLabel>
                                    <Select
                                        sx={{ color: "#fff", borderRadius: "15px" }}
                                        id="centarLabel"
                                        label={"Centar"}
                                        value={sportCenter}
                                        onChange={handleSportCenterChange}
                                    >
                                        <MenuItem value="none" disabled>
                                            <em>Centar</em>
                                        </MenuItem>
                                        <MenuItem value={"Concordia"}>
                                            Sportski cenar Concordia
                                        </MenuItem>
                                        <MenuItem value={"Univers"}>
                                            Sportski cenar Univers
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </Col>
                            <Col xs={6} md={3}>
                                <FormControl
                                    disabled={sportCenter === "none"}
                                    sx={{
                                        m: 1,
                                        width: "100%",
                                        bgcolor: "#1A6A69",
                                        opacity: sportCenter === "none" ? 0.8 : 1,
                                        "& .MuiSelect-icon": {
                                            color: theme.palette.primary.contrastText,
                                        },
                                        borderRadius: "15px",
                                    }}
                                >
                                    <InputLabel
                                        id="hallLabel"
                                        sx={{ color: "#fff" }}
                                    ></InputLabel>
                                    <Select
                                        sx={{ color: "#fff", borderRadius: "15px" }}
                                        id="hallLabel"
                                        label={"Dvorane"}
                                        value={hall}
                                        onChange={handleHallChange}
                                    >
                                        <MenuItem value="none" disabled>
                                            <em>Dvorane</em>
                                        </MenuItem>
                                        <MenuItem value={"Velika"}>Velika dvorana</MenuItem>
                                        <MenuItem value={"Mala"}>Mala dvorana</MenuItem>
                                    </Select>
                                </FormControl>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12}>
                                <LobbyCalendar
                                    disabled={hall === "" || hall === "none"}
                                    dateChange={handleDateChange}
                                />
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} md={3} className={"mt-0"}>
                        <Row>
                            <Button
                                endIcon={<AddIcon />}
                                className={`${
                                    endTime === null ? "disabled" : ""
                                } p-3 w-100`}
                                sx={{
                                    bgcolor: theme.palette.secondary.main,
                                    color: theme.palette.secondary.contrastText,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    textDecoration: "none",
                                    ":hover": {
                                        bgcolor: theme.palette.secondary.dark,
                                        color: theme.palette.secondary.contrastText,
                                    },
                                }}
                                onClick={() => {
                                    createLobby();
                                }}
                            >
                                Kreiraj aktivnost
                            </Button>
                        </Row>
                        <Row>
                            <TimePicker
                                disabled={date === null}
                                timeChange={handleTimeChange}
                            />
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
};
