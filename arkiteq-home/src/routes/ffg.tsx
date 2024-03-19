import React from "react";
import AnnouncementCard from "../components/announcement-card";
import RetroConsole from "../components/retro-console";

function Ffg() {
    return (
        <div id={"announcement-layout"}>
            <RetroConsole>
                <AnnouncementCard title={"The Friendly Fire Games"} description={"Prepare for battle and meet us @ 15:00 15/04/2024"} dateTime={"2024-04-15T15:00:00"}/>
            </RetroConsole>
        </div>
    )
}

export default Ffg