import React from "react";
import RetroConsole from "../retro-console";
import BackChevron from "../back-chevron";
import {useNavigate} from "react-router-dom";

export interface HeaderProps {
    pageTitle: string;
    hasBackButton?: boolean;
}

function PageHeader (props : HeaderProps)  {

    const navigate = useNavigate();

    return (
        <div id="header">
            <RetroConsole>
                <div id={"header-content"}>
                    <div id="the-title">
                        Arkiteq Apps
                    </div>
                    <div className={"vertical-align"}>
                        {props.hasBackButton && <BackChevron onClick={() => {navigate("..", {relative: "path"})}}/>}
                        <span>{props.pageTitle}</span>
                    </div>
                </div>
            </RetroConsole>
        </div>
    )
}

export default PageHeader