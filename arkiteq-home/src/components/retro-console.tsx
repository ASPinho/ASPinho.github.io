import React from 'react';

type RetroConsoleProps = {
    children?: React.ReactNode;
    extraClasses?: string;
}

const RetroConsole = (retroConsoleProps : RetroConsoleProps) => {

    let fullClasses = "retro-console"

    if(retroConsoleProps.extraClasses !== undefined) {
        fullClasses = fullClasses + " " + retroConsoleProps.extraClasses
    }

    return (
        <div className={fullClasses}>
            {retroConsoleProps.children}
        </div>
    )
}
export default RetroConsole