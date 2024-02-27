import React from "react";

type PageTitleBarProps = {
    title: string;
    subtitle?: string;
    children?: React.ReactNode;
}

const PageTitleBar = (pageTitleBarProps : PageTitleBarProps) => {
    return (
        <div id="content-title-bar">
            <div>
                <div className="content-title">
                    {pageTitleBarProps.title}
                </div>
                <div className="content-subtitle ph">
                    {pageTitleBarProps.subtitle}
                </div>
            </div>
            <div className="content-actions ph">
                {pageTitleBarProps.children}
            </div>
        </div>
    )
}
export default PageTitleBar