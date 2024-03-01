import React, {useState} from "react";
import {getKittensTabs} from "../scripts/kittens";
import PageTitleBar from "../components/page-structure/page-title-bar";
import DefaultLayout from "../components/layouts/default-layout";
import PageTitleTabs from "../components/page-structure/page-title-tabs";
import EkSetup from "../components/ek-setup";
import EkInteractions from "../components/ek-interactions";
import PageContent from "../components/page-structure/page-content";

function ExplodingKittens () {

    const [activeTitleTab, setActiveTitleTab] = useState( 1);

    function changeActiveTab(id : number) {
        setActiveTitleTab(id);
    }

    return (
        <>
            <DefaultLayout>
                <PageTitleBar title="Setting up Kittens" subtitle="To play with your bitch ass friends">
                    <PageTitleTabs tabs={getKittensTabs()} activeTab={activeTitleTab} setActiveTab={changeActiveTab}/>
                </PageTitleBar>
                <PageContent>
                    {activeTitleTab === 2 && <EkInteractions/>}
                    {activeTitleTab === 1 && <EkSetup/>}
                </PageContent>
            </DefaultLayout>
        </>
    );
}

export default ExplodingKittens