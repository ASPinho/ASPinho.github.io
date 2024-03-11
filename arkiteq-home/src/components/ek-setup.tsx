import React from "react";
import RetroConsole from "./retro-console";
import Table from "./simple-table";
import {getCardsPerSymbol, getPlayersPerSymbol, getZombieApocalypseCards} from "../scripts/kittens";

const EkSetup = () => {
    return (
        <>
            <RetroConsole>
                <Table data={getPlayersPerSymbol()}/>
            </RetroConsole>
            <RetroConsole>
                <Table data={getCardsPerSymbol()}/>
            </RetroConsole>
            <RetroConsole>
                <Table data={getZombieApocalypseCards()}/>
            </RetroConsole>
        </>
    )
}

export default EkSetup