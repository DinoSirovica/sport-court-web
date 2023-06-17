import {useState, useEffect, useRef} from "react";
import {Col, Container, Row} from "react-bootstrap";
import {Link, useLocation} from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import theme from "../util/colorPallet";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import {TimePicker} from "../components/LobbyCalendar/TimePicker";
import LobbyCalendar from "../components/LobbyCalendar/LobbyCalendar";
import {createLobby, getSportCenters, getSports} from "../util/apiRequestHelper";
import {Footer} from "../components/Footer/Footer";
import {format} from "date-fns";
import "../css/LobbyCreation/LobbyCreator.css";
import "../css/fonts.css";

export const LobbyCreator = () => {
    const location = useLocation();
    const timePickerRef = useRef(null);
    const calendarRef = useRef(null);

    const [sport, setSport] = useState("none");
    const [city, setCity] = useState("none");
    const [sportCenter, setSportCenter] = useState("none");
    const [hall, setHall] = useState("none");
    const [lobbyName, setLobbyName] = useState("");
    const [date, setDate] = useState(null);
    const [endTime, setEndTime] = useState(null);
    const [startTime, setStartTime] = useState(null);
    const [sports, setSports] = useState([]);
    const [sportCenters, setSportCenters] = useState([]);
    const [centersInCity, setCentersInCity] = useState([]);
    const [address, setAddress] = useState(null);


    useEffect(() => {
        getSports().then((response) => {
            setSports(response.data);
        });
    }, []);

    useEffect(() => {
        if (sport !== "none") {
            getSportCenters(sport).then((response) => {
                setSportCenters(response);
            });
        } else {
            setSportCenters([]);
        }
    }, [sport]);

    useEffect(() => {
        if (city !== "none") {
            setCentersInCity(sportCenters.filter((sportCenter) => sportCenter.zip_code == city));
        } else {
            setCentersInCity([]);
        }
    }, [city, sportCenters]);

    const handleClearChecked = () => {
        if (calendarRef.current) {
            calendarRef.current.clearChecked();
        }
    };

    const handleCityChange = (event) => {
        setCity(event.target.value);
        setSportCenter("none");
        setHall("none")
        setDate(null);
        setStartTime(null);
        setEndTime(null);
        if (timePickerRef.current) {
            timePickerRef.current.clearChecked();
        }
    };
    const handleNameChange = (event) => {
        setLobbyName(event.target.value);
        if (event.target.value.length === 0) {
            setSport("none");
            setSportCenter("none");
            setHall("none")
            setCity("none");
            setDate(null);
            setStartTime(null);
            setEndTime(null);
            handleClearChecked();
            if (timePickerRef.current) {
                timePickerRef.current.clearChecked();
            }
        }
    };
    const handleSportChange = (event) => {
        setSport(event.target.value);
        setSportCenter("none");
        setHall("none")
        setCity("none");
        setDate(null);
        setStartTime(null);
        setEndTime(null);
        handleClearChecked();
        if (timePickerRef.current) {
            timePickerRef.current.clearChecked();
        }
    };
    const handleSportCenterChange = (event) => {
        setSportCenter(event.target.value);
        sportCenters.map((sportCenter) => {
            if (sportCenter.id === event.target.value) {
                setAddress(sportCenter.address);
            }
        });
        setHall("none")
        setDate(null);
        handleClearChecked();
        setStartTime(null);
        setEndTime(null);
        if (timePickerRef.current) {
            timePickerRef.current.clearChecked();
        }
    };
    const handleHallChange = (event) => {
        setHall(event.target.value);
        setDate(null);
        handleClearChecked();
        setStartTime(null);
        setEndTime(null);
        if (timePickerRef.current) {
            timePickerRef.current.clearChecked();
        }
    };
    const handleDateChange = (date) => {
        setDate(format(date, "yyyy-MM-dd"));
        setStartTime(null);
        setEndTime(null);
        if (timePickerRef.current) {
            timePickerRef.current.clearChecked();
        }
    };
    const makeLobby = () => {
        const lobby = {
            name: lobbyName,
            sport: sport,
            address: address,
            hall: hall,
            date: date,
            startTime: startTime,
            endTime: endTime,
            sportCenterId: sportCenter,
            maxPlayers: (sports.find((s) => s.id == sport)).maxPlayers,
        };
        createLobby(lobby).then((response) => {
            window.location.href = "/activities";
        });
    };
    const handleTimeChange = (times) => {
        times.sort();
        let value = times[0];

        for (let i = 0; i < times.length; i++) {
            times.sort();
            if (value !== times[i]) {
                setEndTime(null);
            } else {
                const lastTime = parseInt(times[times.length - 1]);
                const endTime = lastTime + 1 + ":00:00";
                setEndTime(endTime);
                setStartTime(times[0] + ":00:00");
            }
            value++;
        }
    };

    function getListOfCities() {
        const cities = [];
        for (let i = 0; i < sportCenters.length; i++) {
            const sportCenter = sportCenters[i];
            if (cities.length === 0) {
                cities.push({zip_code: sportCenter.zip_code, city: sportCenter.city});
            } else if (!cities.some(e => e.zip_code === sportCenter.zip_code)) {
                cities.push({zip_code: sportCenter.zip_code, city: sportCenter.city});
            }
        }
        return cities;
    }

    return (
        <>
            <Container style={{minWidth: "90%"}}>
                <Row className="mt-5 mx-5 g-5">
                    <Col xs={12} md={3} className="m-0">
                        <Row>
                            <Button
                                startIcon={<ArrowBackIcon/>}
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
                            <div className="mt-4">
                                <h4>Kratke upute za kreiranje aktivnosti:</h4>
                                <ol className="lobby-creation-guide list-unstyled">
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
                    <Col xs={12} md={6} className="my-0">
                        <input
                            className="input-naziv"
                            type="text"
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
                                    }}>
                                    <InputLabel
                                        id="sportLabel"
                                        sx={{
                                            color: "#fff",
                                        }}
                                    ></InputLabel>
                                    <Select
                                        sx={{color: "#fff", borderRadius: "15px"}}
                                        id="sportLabel"
                                        label="Sport"
                                        value={sport}
                                        onChange={handleSportChange}
                                    >
                                        <MenuItem value="none" disabled>
                                            <em>Sport</em>
                                        </MenuItem>
                                        {sports.map((sport) => (
                                            <MenuItem key={sport.id} value={sport.id}>
                                                {sport.name}
                                            </MenuItem>
                                        ))}
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
                                        sx={{color: "#fff"}}
                                    ></InputLabel>
                                    <Select
                                        sx={{color: "#fff", borderRadius: "15px"}}
                                        id="cityLabel"
                                        label="Grad"
                                        value={city}
                                        onChange={handleCityChange}
                                    >
                                        <MenuItem value="none" disabled>
                                            <em>Grad</em>
                                        </MenuItem>
                                        {sport !== "none" && (
                                            getListOfCities().map((sportCenter) => (
                                                <MenuItem key={sportCenter.zip_code} value={sportCenter.zip_code}>
                                                    {sportCenter.city}
                                                </MenuItem>
                                            ))
                                        )}

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
                                        sx={{color: "#fff"}}
                                    ></InputLabel>
                                    <Select
                                        sx={{color: "#fff", borderRadius: "15px"}}
                                        id="centarLabel"
                                        label="Centar"
                                        value={sportCenter}
                                        onChange={handleSportCenterChange}
                                    >
                                        <MenuItem value="none" disabled>
                                            <em>Centar</em>
                                        </MenuItem>
                                        {city !== "none" && (
                                            centersInCity.map((sportCenter) => (
                                                <MenuItem key={sportCenter.id} value={sportCenter.id}>
                                                    {sportCenter.sportCenterName}
                                                </MenuItem>
                                            ))
                                        )}

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
                                        sx={{color: "#fff"}}
                                    ></InputLabel>
                                    <Select
                                        sx={{color: "#fff", borderRadius: "15px"}}
                                        id="hallLabel"
                                        label="Dvorane"
                                        value={hall}
                                        onChange={handleHallChange}
                                    >
                                        <MenuItem value="none" disabled>
                                            <em>Dvorane</em>
                                        </MenuItem>
                                        {sportCenter !== "none" && (
                                            sportCenters.find((sc) => sc.id == sportCenter).halls.map((hall) => (
                                                <MenuItem key={hall} value={hall}>
                                                    {hall}
                                                </MenuItem>
                                            ))
                                        )}
                                    </Select>
                                </FormControl>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12}>
                                <LobbyCalendar
                                    disabled={hall === "" || hall === "none"}
                                    dateChange={handleDateChange}
                                    ref={calendarRef}
                                />
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} md={3} className="mt-0">
                        <Row>
                            <Button
                                endIcon={<AddIcon/>}
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
                                    makeLobby();
                                }}
                            >
                                Kreiraj aktivnost
                            </Button>
                        </Row>
                        <Row>
                            <TimePicker
                                disabled={date === null}
                                timeChange={handleTimeChange}
                                centerId={sportCenter}
                                hall={hall}
                                date={date}
                                ref={timePickerRef}
                            />
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </>
    );
};
