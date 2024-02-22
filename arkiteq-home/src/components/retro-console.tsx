import React from 'react';

class RetroConsole extends React.Component<{ children: any }> {
    render() {
        let {children} = this.props;
        return (
            <div className="retro-console">
                {children}
            </div>
        )
    }
}

export default RetroConsole