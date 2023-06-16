import React from "react";
import {AllLobbyCards} from "./AllLobbyCards";
import {useMediaQuery, useTheme} from "@mui/material";


export function ProfileLobbyList({lobbies}) {
    const themeMob = useTheme();
    const isMobile = useMediaQuery(themeMob.breakpoints.down("sm"))

    return (
        <div style={{maxWidth: isMobile ? "100%" : "85%"}}>
            <h3 className="pb-0 m-0" style={{textAlign: isMobile ? "center" : "start"}}>
                Moje aktivnosti
            </h3>
            <AllLobbyCards lobbies={lobbies}/>
        </div>
    );
}
