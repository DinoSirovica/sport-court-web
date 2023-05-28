import CardContent from "@mui/material/CardContent";
import * as React from "react";
import {TextField, ThemeProvider} from "@mui/material";
import {forwardRef, useEffect, useImperativeHandle, useRef, useState} from "react";
import Button from "@mui/material/Button";
import {Col, Row} from "react-bootstrap";
import {AvatarImage} from "./AvatarImage";
import "../../css/fonts.css";
import theme from "../../util/colorPallet";


export const ProfileEdit = forwardRef (({user},ref) => {
    const [image, setImage] = React.useState(user.imageData);
    const [firstname, setFirstname] = React.useState(user.firstname);
    const [lastname, setLastname] = React.useState(user.lastname);
    const [email, setEmail] = React.useState(user.email);
    const [phone, setPhone] = React.useState(user.phoneNumber);
    const [isChanged, setIsChanged] = useState(true);

    const childRef = useRef(null);

    const getValues = () => {
        if(image !== user.imageData){
            user.imageData = image;
            setIsChanged(true);
        }
        if(firstname !== user.firstname){
            user.firstname = firstname;
            setIsChanged(true);
        }
        if(lastname !== user.lastname){
            user.lastname = lastname;
            setIsChanged(true);
        }
        if(email !== user.email){
            user.email = email;
            setIsChanged(true);
        }
        if(phone !== user.phoneNumber){
            user.phoneNumber = phone;
            setIsChanged(true);
        }
        return user;
    };
    const getChange = () => {
        return isChanged;
    };

    // Assign the childMethod to the ref
    useImperativeHandle(ref, () => ({
        getValues, getChange
    }));

    const handleImageChange = (value) => {
        setImage(value);
    };
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
                            <AvatarImage image={image} imageChange={handleImageChange}/>
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
});


