import React from "react";
import PageHeader from "../components/header";
import RetroConsole from "../components/retro-console";
import Table from "../components/simple-table";
import {getCardsPerSymbol, getPlayersPerSymbol, getZombieApocalypseCards} from "../scripts/kitten-tables";
import PageContent from "../components/page-content";

function ExplodingKittens () {
    return (
        <>
        <PageHeader />
        <PageContent title="Setting up Kittens" subtitle="To play with your bitch ass friends">
            <RetroConsole extraClasses={"margin-bottom-m"}>
                <Table data={getPlayersPerSymbol()}/>
            </RetroConsole>
            <RetroConsole extraClasses={"margin-bottom-m"}>
                <Table data={getCardsPerSymbol()}/>
            </RetroConsole>
            <RetroConsole>
                <Table data={getZombieApocalypseCards()}/>
            </RetroConsole>
        </PageContent>
        </>
    );
}

export default ExplodingKittens