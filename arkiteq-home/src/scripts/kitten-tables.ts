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

export function getZombieApocalypseCards() : TableData {
    return {
        id: "zombie-apocalypse",
        headers: ["Zombie Apocalypse Players", "Draw Pile", "Cards to add"],
        rows: [
            ["2", "15", "7"],
            ["3", "20", "11"],
            ["4", "25", "1"],
            ["5", "30", "13"],
            ["6", "35", "25"],
            ["7", "\"", "32"],
            ["8", "\"", "39"],
            ["9", "\"", "46"],
            ["10", "\"", "53"],
        ],
        columnClasses: ["vertical-align flex1", "small full-center-flex", "med full-center-flex"]
    };
}