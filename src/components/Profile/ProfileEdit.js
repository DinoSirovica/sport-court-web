import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import * as React from "react";
import {TextField} from "@mui/material";
import {useEffect} from "react";
import Button from "@mui/material/Button";
import {Col, Row} from "react-bootstrap";
import Avatar from "@mui/material/Avatar";
import {getImageFromBase64} from "../../util/helper";
import {AvatarImage} from "./AvatarImage";

export const ProfileEdit = ({ user }) => {
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
                <CardContent>
                    <Row>
                        <Col key={1} className='mx-0 text-center'>
                            <AvatarImage image={image} setImage={setImage}/>
                            <TextField className={"w-100 mb-2"} id="outlined-basic" label="Ime" variant="outlined" value={firstname} onChange={handleFirstnameChange} />
                            <TextField className={"w-100 mb-2"} id="outlined-basic" label="Prezime" variant="outlined" value={lastname} onChange={handleLastnameChange} />
                            <TextField className={"w-100 mb-2"} id="outlined-basic" label="Email" variant="outlined" value={email} onChange={handleEmailChange}/>
                            <TextField className={"w-100 mb-2"} id="outlined-basic" label="Broji telefona" variant="outlined" value={phone} onChange={handlePhoneChange}/>
                            <Button variant="contained" onClick={() => console.log(firstname)}>
                                Ispis
                            </Button>
                        </Col>
                    </Row>
                </CardContent>
            </div>
        );
    };

