import React from "react";
import BaseLayout from "../components/base-layout";
import PageHeader from "../components/header";
import RetroConsole from "../components/retro-console";
import Table from "../components/simple-table";
import {getCardsPerSymbol, getPlayersPerSymbol, getZombieApocalypseCards} from "../scripts/kitten-tables";

function ExplodingKittens () {
    return (
        <BaseLayout>
            <PageHeader />
            <div id="content">
                <div className="content-title">
                    <p>Setting up Kittens</p>
                </div>
                <div className="content-subtitle ph">
                    <p>To play with your bitch ass friends</p>
                </div>
                <div className="content-container">
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
                </div>
            </div>
        </BaseLayout>
    );
}

export default ExplodingKittens