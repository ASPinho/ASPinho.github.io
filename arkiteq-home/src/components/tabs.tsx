import React, { useState } from 'react';

interface Tab {
    id: number;
    label: string;
}

interface TabsProps {
    tabs: Tab[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(tabs[0].id);

    const handleTabClick = (tabId: number) => {
        setActiveTab(tabId);
    };

    return (
        <div>
            <div className="tab-list">
                {tabs.map(tab => (
                    <div
                        key={tab.id}
                        className={`tab ${activeTab === tab.id ? 'active' : ''}`}
                        onClick={() => handleTabClick(tab.id)}
                    >
                        {tab.label}
                    </div>
                ))}
            </div>
            <div className="tab-content">
                {tabs.map(tab =>
                    activeTab === tab.id ? (
                        <div key={tab.id} className="tab-panel">
                            {/* Your tab content goes here */}
                            {tab.label} content
                        </div>
                    ) : null
                )}
            </div>
        </div>
    );
};

export default Tabs