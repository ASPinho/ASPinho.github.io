import React from "react";
import PageHeader from "../header";

type DefaultLayoutProps = {
    children: React.ReactNode;
}

const DefaultLayout = (props : DefaultLayoutProps) => {
    return (
        <>
            <PageHeader/>
            <div id="content">
                {props.children}
            </div>
        </>
    )
}

export default DefaultLayout