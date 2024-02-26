import React from "react";

type PageContentProps = {
    title: string;
    subtitle?: string;
    children?: React.ReactNode
}

const PageContent = (pageContentProps : PageContentProps) => {
    return (
        <div id="content">
            <div className="content-title">
                {pageContentProps.title}
            </div>
            <div className="content-subtitle ph">
                {pageContentProps.subtitle}
            </div>
            <div className="content-container">
                {pageContentProps.children}
            </div>
        </div>
    )
}
export default PageContent