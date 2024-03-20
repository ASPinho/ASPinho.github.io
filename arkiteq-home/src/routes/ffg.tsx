import React from "react";
import AnnouncementCard from "../components/announcement-card";
import RetroConsole from "../components/retro-console";

function Ffg() {
    return (
        <div id={"announcement-layout"}>
            <RetroConsole>
                <AnnouncementCard title={"Friendly Fire Games"} description={"The first annual opportunity to annihilate friends as if they were foes"} dateTime={"2024-04-13T15:00:00"}/>
            </RetroConsole>
        </div>
    )
}

export default Ffg