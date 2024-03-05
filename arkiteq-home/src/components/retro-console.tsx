import React from 'react';

type RetroConsoleProps = {
    children?: React.ReactNode;
    isBorderless?: boolean;
}

const RetroConsole = (props : RetroConsoleProps) => {

    let fullClasses = "retro-console"

    if(props.isBorderless) {
        fullClasses = fullClasses + " borderless"
    }

    return (
        <div className={fullClasses}>
            {props.children}
        </div>
    )
}
export default RetroConsole