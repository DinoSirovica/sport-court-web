import CardContent from "@mui/material/CardContent";
import * as React from "react";
import {TextField, ThemeProvider} from "@mui/material";
import {useEffect} from "react";
import Button from "@mui/material/Button";
import {Col, Row} from "react-bootstrap";
import {AvatarImage} from "./AvatarImage";
import "../../css/fonts.css";
import theme from "../../util/ColorPallet";


export const ProfileEdit = ({user}) => {
    const [image, setImage] = React.useState(user.imageData);
    const [firstname, setFirstname] = React.useState(user.firstname);
    const [lastname, setLastname] = React.useState(user.lastname);
    const [email, setEmail] = React.useState(user.email);
    const [phone, setPhone] = React.useState(user.phoneNumber);

    //todo Add updating user data to database
    useEffect(() => {
        return () => {
        };
    }, []);

    const handleFirstnameChange = (event) => {
        setFirstname(event.target.value);
    };
    const handleLastnameChange = (event) => {
        setLastname(event.target.value);
    };
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    };

    return (
        <div>
            <ThemeProvider theme={theme}>
                <CardContent>
                    <Row>
                        <Col key={1} className='mx-0 text-center'>
                            <AvatarImage image={image} setImage={setImage}/>
                            <TextField fullWidth focused color={"secondary"} className={" mb-2"} id="outlined-basic"
                                       label="Ime" variant="outlined" value={firstname} onChange={handleFirstnameChange}
                                       InputProps={{
                                           style: {color: '#fff'},
                                       }}/>
                            <TextField fullWidth focused color={"secondary"} className={" mb-2"} id="outlined-basic"
                                       label="Prezime" variant="outlined" value={lastname}
                                       onChange={handleLastnameChange}
                                       InputProps={{
                                           style: {color: '#fff'},
                                       }}/>
                            <TextField fullWidth focused color={"secondary"} className={" mb-2"} id="outlined-basic"
                                       label="Email" variant="outlined" value={email} onChange={handleEmailChange}
                                       InputProps={{
                                           style: {color: '#fff'},
                                       }}/>
                            <TextField fullWidth focused color={"secondary"} className={"mb-2"} id="outlined-basic"
                                       label="Broji telefona" variant="outlined" value={phone}
                                       onChange={handlePhoneChange}
                                       InputProps={{
                                           style: {color: '#fff',},
                                       }}/>
                            <Button className={"mb-2"} fullWidth color={"secondary"} disableRipple variant="contained" onClick={() => console.log(firstname)}>
                               Promijeni lozinku
                            </Button>
                            <Button className={"mb-2"} fullWidth color={"secondary"} disableRipple variant="contained" onClick={() => console.log(lastname)}>
                                Deaktiviraj račun
                            </Button>
                        </Col>
                    </Row>
                </CardContent>
            </ThemeProvider>
        </div>
    );
};

