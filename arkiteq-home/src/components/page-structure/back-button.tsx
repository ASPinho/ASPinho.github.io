import React from "react";
import {useNavigate} from "react-router-dom";
import LeftArrow from "./left-arrow";

function BackButton () {

    const navigate = useNavigate()

    return (
        <div
            className={"back-button"}
            onClick={() => navigate("..", {relative: "path"})}>

            <LeftArrow/>
            <span>BTFO</span>
        </div>
    )
}

export default BackButton