import React from "react";

export interface LeftArrowProps {
    size?: string;
}

function LeftArrow (props: LeftArrowProps) {

    const finalSize = props.size === undefined ? "24" : props.size

    return (
        <svg width={finalSize} height={finalSize} viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
            <path d="M44.2,144.6l37.3-37.4l-10-10L10,158.8h140v-14.1H44.2z"/>
        </svg>
    )
}

export default LeftArrow