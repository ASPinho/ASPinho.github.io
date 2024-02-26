import React from 'react';

type Children = {
    children: React.ReactNode;
}

const RetroConsole = ({children}: Children) => {
    return (
        <div className="retro-console">
            {children}
        </div>
    )
}
export default RetroConsole