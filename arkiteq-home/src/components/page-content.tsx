import React from "react";

const PageContent = (children : React.ReactNode) => {
    return (
        <div id="content">
            {children}
        </div>
    )
}
            /*<div className="content-container">
      {pageContentProps.children}
            </div>*/
export default PageContent
