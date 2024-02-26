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
            <div className="horizontal-align justify-content-space-between margin-bottom-l">
                <RetroConsole>
                    <Table data={getPlayersPerSymbol()}/>
                </RetroConsole>
                <RetroConsole>
                    <Table data={getCardsPerSymbol()}/>
                </RetroConsole>
            </div>
            <div className="horizontal-align margin-bottom-l">
                <RetroConsole>
                    <Table data={getZombieApocalypseCards()}/>
                </RetroConsole>
            </div>
        </PageContent>
        </>
    );
}

export default ExplodingKittens