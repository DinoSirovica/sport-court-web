import { List, ListItem, ListItemButton } from "@mui/material";
import React, {useEffect, useImperativeHandle} from "react";
import theme from '../../util/colorPallet';
import "../../css/fonts.css";
import "../../css/LobbyCreation/LobbyCreator.css";
import {getLobbiesByCenterId} from "../../util/apiRequestHelper";

export const TimePicker = React.forwardRef(({ disabled, timeChange, clear, centerId, hall, date}, ref) => {
    const [checked, setChecked] = React.useState([]);
    const [lobbies, setLobbies] = React.useState([]);
    const [reservedTimes, setReservedTimes] = React.useState([]);

    useEffect(() => {
        if (!disabled) {
            getLobbiesByCenterId(centerId, hall, date).then((res) => {
                setLobbies(res.data);
                const times = [];
                res.data.forEach((lobby) => { // Use res.data instead of lobbies
                    let startTime = parseInt(lobby.startTime.split(":")[0]);
                    let endTime = parseInt(lobby.endTime.split(":")[0]);
                    for (let i = startTime; i < endTime; i++) {
                        times.push(i);
                    }
                });
                setReservedTimes(times); // Move setReservedTimes outside the loop
            });
        }
    }, [disabled]);


    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }
        timeChange(newChecked);
        setChecked(newChecked);
    };

    const clearChecked = () => {
        setChecked([]);
        setReservedTimes([]);
    };

    useImperativeHandle(ref, () => ({
        clearChecked
    }));

    return (
        <div className={`${disabled ? "disabled" : ""} p-0`}>
            <List className="p-0 mt-4" sx={{ height: "700px", overflow: "auto" }}>
                {Array.from({ length: 24 }).map((_, index) => {
                    const isSelected = checked.includes(index);

                    return (
                        <ListItem key={index} >
                            <ListItemButton className={
                                reservedTimes.includes(index) ? "reserved" : ""
                            }
                                sx={{
                                    display: "flex",
                                    p: 0.8,
                                    backgroundColor: isSelected ? theme.palette.primary.dark : theme.palette.primary.main,
                                    color: theme.palette.primary.contrastText,
                                    justifyContent: "center",
                                    borderRadius: "12px",
                                    ":hover": {
                                        backgroundColor: theme.palette.secondary.main,
                                        color: theme.palette.secondary.contrastText,
                                    },
                                }}
                                onClick={handleToggle(index)}
                            >
                                {`${index}.00 - ${index + 1}.00`}
                            </ListItemButton>
                        </ListItem>
                    );
                })}
            </List>
        </div>
    );
});
