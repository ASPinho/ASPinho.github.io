import React from "react";

export interface BackChevronProp {
    onClick(): void;
}

function BackChevron(prop : BackChevronProp) {
    return (
        <div
            className="back-chevron"
            onClick={() => {prop.onClick()}}
        />
    )
}

export default BackChevron