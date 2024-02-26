import React from "react";

export interface PageContentProps {
    title: string;
    subtitle?: string;
    children: React.ReactNode
}

const PageContent: React.FC<PageContentProps> = ({title, subtitle, children}) => {
    return (
        <div id="content">
            <div className="content-title">
                {title}
            </div>
            <div className="content-subtitle ph">
                {subtitle}
            </div>
            <div className="content-container">
                {children}
            </div>
        </div>
    )
}
export default PageContent