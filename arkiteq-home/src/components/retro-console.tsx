import React from 'react';

type RetroConsoleProps = {
    children: React.ReactNode;
}

const RetroConsole = (props : RetroConsoleProps) => {

    return (
        <div className={"retro-console"}>
            {props.children}
        </div>
    )
}
export default RetroConsole