import React from "react";
import RetroConsole from "./retro-console";
import Table from "./simple-table";
import {getCardsPerSymbol, getPlayersPerSymbol, getZombieApocalypseCards} from "../scripts/kittens";

const EkSetup = () => {
    return (
        <>
            <RetroConsole extraClasses="margin-bottom-m">
                <Table data={getPlayersPerSymbol()}/>
            </RetroConsole>
            <RetroConsole extraClasses="margin-bottom-m">
                <Table data={getCardsPerSymbol()}/>
            </RetroConsole>
            <RetroConsole>
                <Table data={getZombieApocalypseCards()}/>
            </RetroConsole>
        </>
    )
}

export default EkSetup