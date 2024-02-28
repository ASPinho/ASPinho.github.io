import {Tab, TableData, InteractionCardProp} from "./interfaces";

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
        headers: ["Zombiepocalypse Players", "Draw Pile", "Cards to add"],
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

export function getKittensTabs() : Tab[] {

    const tabLabels = ["Setup", "Card Interactions"]
    const tabs : Tab[] = []

    for (let i = 0; i < tabLabels.length; i++) {
        const currTab: Tab = {
            id: i + 1,
            label: tabLabels[i]
        }

        tabs.push(currTab);
    }
    return tabs
}

export function getKittensInteractions() {

    let interactions : InteractionCardProp[] = [
        {
            title: "Imploding Kitten",
            description: "- Zombie Kittens: If you die from the Imploding Kitten and return to the game, the Imploding Kitten card will be placed back into the deck face up.\n" +
                "- Streaking Kittens: The total number of Kittens (Imploding and Exploding) should be equal to the number of players"
        },
        {
            title: "Tower of Power",
            description: "- Zombie Kittens: If a player has the Tower of Power and dies, they keep the Tower of Power. \nIf the player later becomes Living, the Tower of Power will take effect again."
        },
        {
            title: "Barking Kitten",
            description: "- Play Barking Kitten face up, ask for other; if player has it, they give half their cards (rounding up), you return the same number, and both Barking Kittens are discarded.\n" +
                "If no one has the other Barking Kitten, leave the card face up in front of you, making you the target.\n" +
                "If you have both, combine and play them together, selecting a target.\n" +
                "Barking Kittens can't be noped."
        }
    ]

    return interactions
}