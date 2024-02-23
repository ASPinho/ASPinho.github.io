import React from 'react';

class BaseLayout extends React.Component<{ children: any }> {
    render() {
        let {children} = this.props;
        return (
            <div id="main-content">
                {children}
            </div>
        )
    }
}

export default BaseLayout