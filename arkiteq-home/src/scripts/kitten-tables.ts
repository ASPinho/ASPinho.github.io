import {TableData} from "./interfaces";

function playersPerSymbol() : TableData {
    return {
        headers: ["Max Players / Symbol", "Paw", "No Paw"],
        rows: [
            ["Zombie", "2", "3"],
            ["Exploding", "3", "7"],
        ]
    };
}

export default playersPerSymbol