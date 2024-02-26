import React from 'react';

type Children = {
    children: React.ReactNode;
}

const BaseLayout = ({children}: Children) => {
    return (
        <div id="main-content">
            {children}
        </div>
    )
}

export default BaseLayout