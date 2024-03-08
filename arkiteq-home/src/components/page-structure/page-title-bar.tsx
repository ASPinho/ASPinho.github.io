import React from "react";
import BackButton from "./back-button";

type PageTitleBarProps = {
    title: string;
    subtitle?: string;
    showBackButton?: boolean;
    children?: React.ReactNode;
}

const PageTitleBar = (props : PageTitleBarProps) => {
    return (
        <div id="content-title-bar">
            <div>
                <div className={"vertical-align"}>
                    {props.showBackButton && <BackButton/>}
                    <div className="content-title">
                        {props.title}
                    </div>
                </div>

                {(props.subtitle !== undefined) &&
                <div className="content-subtitle">
                    {props.subtitle}
                </div>
                }
            </div>
            <div className="content-actions ph">
                {props.children}
            </div>
        </div>
    )
}
export default PageTitleBar