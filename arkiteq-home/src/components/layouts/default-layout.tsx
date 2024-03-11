import React from "react";
import PageHeader from "../page-structure/header";

type DefaultLayoutProps = {
    pageTitle: string;
    hasBackNavigation?: boolean;
    children: React.ReactNode;
}

const DefaultLayout = (props : DefaultLayoutProps) => {
    return (
        <>
            <PageHeader pageTitle={props.pageTitle} hasBackButton={props.hasBackNavigation}/>
            <div id="main-content">
                {props.children}
            </div>
        </>
    )
}

export default DefaultLayout