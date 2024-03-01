import React from "react";
import {Tabs} from "../../scripts/interfaces";

const PageTitleTabs = (props : Tabs) => {

    const tabs = props.tabs;

    return (
        <div className={"page-title-tabs"}>
            {tabs.map(tab => (
                <div
                    key={tab.id}
                    className={`page-title-tab ${props.activeTab === tab.id ? 'active' : ''}`}
                    onClick={() => props.setActiveTab(tab.id)}
                >
                    {tab.label}
                </div>
            ))}
        </div>
    )
}

export default PageTitleTabs