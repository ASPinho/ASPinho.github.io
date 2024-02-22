import {TableData} from "./interfaces";

function playersPerSymbol() : TableData {
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

export default playersPerSymbol