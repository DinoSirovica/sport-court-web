import { List, ListItem, ListItemButton } from "@mui/material";
import React from "react";
import theme from '../../util/colorPallet';
import "../../css/fonts.css";
export function TimePicker({ disabled, date, timeChange }) {
    const [checked, setChecked] = React.useState([]);

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

    return (
        <div className={`${disabled ? "disabled" : ""} p-0`}>
            <List className="p-0 mt-4" sx={{ height: "700px", overflow: "auto" }}>
                {Array.from({ length: 24 }).map((_, index) => {
                    const isSelected = checked.includes(index);

                    return (
                        <ListItem key={index}>
                            <ListItemButton
                                sx={{
                                    display: "flex",
                                    p: 0.8,
                                    backgroundColor: isSelected ? theme.palette.primary.dark  : theme.palette.primary.main,
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
}
