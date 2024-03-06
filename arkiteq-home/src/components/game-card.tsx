import React from "react";

export interface TheButtonProps {
    label: string;
    onclick(): void;
}
function GameCard (props : TheButtonProps) {
    return (
        <div
            className={"game-card"}
            onClick={() => props.onclick()}>
            <span>
                {props.label}
            </span>
        </div>
    )
}

export default GameCard