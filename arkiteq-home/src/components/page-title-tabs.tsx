import React, {useState} from "react";
import {Tabs} from "../scripts/interfaces";

const PageTitleTabs = (props : Tabs) => {

    const tabs = props.tabs;
    const [activeTab, setActiveTab] = useState(tabs[0].id);
    const handleTabClick = (tabId: number) => {
        setActiveTab(tabId);
    };

    return (
        <div className={"page-title-tabs"}>
            {tabs.map(tab => (
                <div
                    key={tab.id}
                    className={`page-title-tab ${activeTab === tab.id ? 'active' : ''}`}
                    onClick={() => handleTabClick(tab.id)}
                >
                    {tab.label}
                </div>
            ))}
        </div>
    )
}

export default PageTitleTabs