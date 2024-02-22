import {TableData} from "./interfaces";

export function getPlayersPerSymbol() : TableData {
    return {
        id: "player-symbol",
        headers: ["Max Players / Symbol", "Paw", "No Paw"],
        rows: [
            ["Zombie", "2", "3"],
            ["Exploding", "3", "7"],
        ],
        columnClasses: ["vertical-align flex1", "small full-center-flex", "med full-center-flex"]
    };
}

export function getCardsPerSymbol() : TableData {
    return {
        id: "card-symbol",
        headers: ["Cards / Symbol", "Paw", "No Paw"],
        rows: [
            ["Zombie", "22", "30"],
            ["Exploding", "24", "36"],
        ],
        columnClasses: ["vertical-align flex1", "small full-center-flex", "med full-center-flex"]
    };
}