import React from "react";
import RetroConsole from "./retro-console";
import Table from "./simple-table";
import {getCardsPerSymbol, getPlayersPerSymbol, getZombieApocalypseCards} from "../scripts/kittens";

const EkSetup = () => {
    return (
        <>
            <RetroConsole isBorderless={true}>
                <Table data={getPlayersPerSymbol()}/>
            </RetroConsole>
            <RetroConsole isBorderless={true}>
                <Table data={getCardsPerSymbol()}/>
            </RetroConsole>
            <RetroConsole isBorderless={true}>
                <Table data={getZombieApocalypseCards()}/>
            </RetroConsole>
        </>
    )
}

export default EkSetup