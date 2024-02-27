import React from "react";
import RetroConsole from "../components/retro-console";
import Table from "../components/simple-table";
import {getCardsPerSymbol, getPlayersPerSymbol, getZombieApocalypseCards, getKittensTabs} from "../scripts/kittens";
import PageTitleBar from "../components/page-title-bar";
import DefaultLayout from "../components/layouts/default-layout";
import PageTitleTabs from "../components/page-title-tabs";

function ExplodingKittens () {
    return (
        <>
            <DefaultLayout>
                <PageTitleBar title="Setting up Kittens" subtitle="To play with your bitch ass friends">
                    <PageTitleTabs tabs={getKittensTabs()}/>
                </PageTitleBar>
                <RetroConsole extraClasses="margin-bottom-m">
                    <Table data={getPlayersPerSymbol()}/>
                </RetroConsole>
                <RetroConsole extraClasses="margin-bottom-m">
                    <Table data={getCardsPerSymbol()}/>
                </RetroConsole>
                <RetroConsole>
                    <Table data={getZombieApocalypseCards()}/>
                </RetroConsole>
            </DefaultLayout>
        </>
    );
}

export default ExplodingKittens