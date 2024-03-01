import React from "react";
import PageHeader from "../page-structure/header";

type DefaultLayoutProps = {
    children: React.ReactNode;
}

const DefaultLayout = (props : DefaultLayoutProps) => {
    return (
        <>
            <PageHeader/>
            <div id="main-content">
                {props.children}
            </div>
        </>
    )
}

export default DefaultLayout