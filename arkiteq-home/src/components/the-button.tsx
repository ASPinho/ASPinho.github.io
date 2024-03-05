import React from "react";

export interface TheButtonProps {
    id: number;
    label: string;
    onclick(): void;
}
function TheButton (props : TheButtonProps) {
    return (
        <div
            key={props.id}
            className={"btn btn-primary btn-large"}
            onClick={() => props.onclick()}>
            {props.label}
        </div>
    )
}

export default TheButton