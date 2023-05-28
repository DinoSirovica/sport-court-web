import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {getImageFromBase64} from "../../util/helper";
import {ProfileEdit} from "./ProfileEdit";
import "../../css/Profile/Profile.css";
import "../../css/fonts.css";
import {updateUser} from "../../util/apiRequestHelper";
import {useRef, useState} from "react";
import User from "../Models/Models";

export const ProfileDetailExpend = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function ProfileDetailCard({ user, userUpdate }: { user: User }) {
    const [expanded, setExpanded] = useState(false);
    const [editButton, setEditButton] = useState("Edit");
    const [isChanged, setIsChanged] = useState(true);
    const [newUser, setNewUser] = useState(null);

    const editRef = useRef(null);

    // Method to call the childMethod
    const getEditValues = () => {
        if (editRef.current) {
            const temp = editRef.current.getValues();
            const user = new User(temp.id,temp.username,temp.firstname,temp.lastname,temp.phoneNumber,temp.email,temp.password,temp.role,temp.imageData)
            setNewUser(user);
            setIsChanged(editRef.current.getChange());
        }
    };


    const handleExpandClick = async () => {
        setExpanded(!expanded);

        if (editButton === "Edit") {
            setEditButton("Save");
        } else {
            setEditButton("Edit");
            getEditValues();
            if (isChanged) {
                userUpdate(await updateUser(user));
                setIsChanged(false);
            }
        }
    };

    return (
        <Card className={"profile-card-body"} sx={{ maxWidth: 326 }}>
            <CardMedia
                component="img"
                height="320"
                image={getImageFromBase64(user.imageData)}
                alt="Paella dish"
                sx={{
                    borderBottomLeftRadius: "10px",
                    borderBottomRightRadius: "10px",
                }}
            />
            <Avatar sx={{
                width: "110px",
                height: "110px",
                position: "relative",
                top: "-40px",
                left: "33%",
            }} src={getImageFromBase64(user.imageData)} aria-label="recipe">
            </Avatar>
            <CardContent className={"pt-0"}
                         sx={{
                             position: "relative",
                             top: "-30px",
                         }}>
                <Typography variant="h5">
                    {user.username}
                </Typography>
                <Typography variant="body1" >
                    {user.firstname} {user.lastname}
                </Typography>
            </CardContent>
            <CardActions disableSpacing sx={{
                position: "relative",
                top: "-30px",
                right: "112px",
            }}>
                <ProfileDetailExpend
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <Button disableRipple className={"button-profile"} variant="contained" >{editButton}</Button>
                </ProfileDetailExpend>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <ProfileEdit user={user} ref={editRef}/>

            </Collapse>
        </Card>
    );
}
