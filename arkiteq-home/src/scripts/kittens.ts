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
        headers: ["Zombiepocalypse", "Draw Pile", "Cards to add"],
        rows: [
            ["6", "35", "25"],
            ["7", "\"", "32"],
            ["8", "\"", "39"],
            ["9", "\"", "46"],
            ["10", "\"", "53"]
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
            subsections: [
                {
                    subtitle: "Zombie Kittens",
                    description: "If you die from the Imploding Kitten and return to the game, the Imploding Kitten card will be placed back into the deck face up."
                },
                {
                    subtitle: "Streaking Kittens",
                    description: "The total number of Kittens (Imploding and Exploding) should be equal to the number of players."
                },
                {
                    subtitle: "2 players",
                    description: "Play the game with 1 Exploding Kitten and the Imploding Kitten from the expansion deck."
                }
            ]
        },
        {
            title: "Tower of Power",
            subsections: [
                {
                    subtitle: "Zombie Kittens",
                    description: "If a player has the Tower of Power and dies, they keep the Tower of Power. If the player later becomes Living, the Tower of Power will take effect again."
                }
            ]
        },
        {
            title: "Barking Kitten",
            subsections: [
                {
                    subtitle: "Card Explanation",
                    description: "Play Barking Kitten face up, ask for other; if player has it, they give half their cards (rounding up), you return the same number, and both Barking Kittens are discarded.\n" +
                        "If no one has the other Barking Kitten, leave the card face up in front of you, making you the target.\n" +
                        "If you have both, combine and play them together, selecting a target.\n" +
                        "Barking Kittens can't be noped."
                }
            ]
        },
        {
            title: "Share the Future",
            subsections: [
                {
                    subtitle: "Zombie Kittens",
                    description: "If the next player is Dead, the three cards will still be shared with that Dead player."
                }
            ]
        }

    ]

    return interactions
}