import React from "react";
import {AllLobbyCards} from "./AllLobbyCards";


export function ProfileLobbyList({ lobbies }) {
    return (
        <div style={{ maxWidth: "85%" }}>
            <h3 className={"pb-0 m-0"} style={{ textAlign: "left" }}>
                Moje aktivnosti
            </h3>
            <AllLobbyCards lobbies={lobbies} />
        </div>
    );
}
