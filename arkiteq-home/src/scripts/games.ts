export interface Game {
    title: string;
    genres: string[];
    averageDuration: number;
    minPlayers: number;
    maxPlayers: number;
    route: string;
}

export function getGames() {

    const games : Game[] = [
        {
            title: "Exploding Kittens",
            genres: ["Card Battle"],
            averageDuration: 15,
            minPlayers: 2,
            maxPlayers: 10,
            route: "ek"
        },
        {
            title: "DorfRomantik",
            genres: ["Cooperative","City Building","Puzzle"],
            averageDuration: 60,
            minPlayers: 1,
            maxPlayers: 6,
            route: "romantik"
        },
        {
            title: "Ticket to Ride: Europe",
            genres: ["Cooperative","Route Building","Puzzle","Campaign"],
            averageDuration: 60,
            minPlayers: 2,
            maxPlayers: 5,
            route: "ttr-europe"
        },
        {
            title: "Ticket to Ride: Amsterdam",
            genres: ["Cooperative","Route Building","Puzzle"],
            averageDuration: 30,
            minPlayers: 2,
            maxPlayers: 4,
            route: "ttr-amsterdam"
        },
        {
            title: "Century Golem - Eastern Mountains",
            genres: ["Economic"],
            averageDuration: 45,
            minPlayers: 2,
            maxPlayers: 4,
            route: "century-golem-2"
        },
        {
            title: "Night Of The Ninja",
            genres: ["Bluffing", "Team Play"],
            averageDuration: 30,
            minPlayers: 4,
            maxPlayers: 11,
            route: "night-of-the-ninja"
        },
        {
            title: "5 Minute Dungeon",
            genres: ["Role Playing", "Cooperative", "Fast Pace"],
            averageDuration: 30,
            minPlayers: 2,
            maxPlayers: 5,
            route: "5-minute-dungeon"
        },
        {
            title: "Here To Slay",
            genres: ["Role Playing", "Card Battle"],
            averageDuration: 45,
            minPlayers: 2,
            maxPlayers: 6,
            route: "here-to-slay"
        },
        {
            title: "Unstable Unicorns",
            genres: ["Card Battle"],
            averageDuration: 30,
            minPlayers: 2,
            maxPlayers: 8,
            route: "unstable-unicorns"
        },
        {
            title: "Mantis",
            genres: ["Card Battle"],
            averageDuration: 20,
            minPlayers: 2,
            maxPlayers: 6,
            route: "mantis"
        },
        {
            title: "Skull",
            genres: ["Bluffing"],
            averageDuration: 45,
            minPlayers: 3,
            maxPlayers: 6,
            route: "skull"
        },
        {
            title: "Skull King",
            genres: ["Trick Taking"],
            averageDuration: 45,
            minPlayers: 2,
            maxPlayers: 8,
            route: "skull-king"
        },
        {
            title: "Splendor",
            genres: ["Economic"],
            averageDuration: 45,
            minPlayers: 2,
            maxPlayers: 4,
            route: "splendor"
        },
        {
            title: "Istanbul",
            genres: ["Economic"],
            averageDuration: 45,
            minPlayers: 2,
            maxPlayers: 4,
            route: "istanbul"
        },
        {
            title: "Dobble - Harry Potter",
            genres: ["Card Matching", "Fast Pace"],
            averageDuration: 15,
            minPlayers: 2,
            maxPlayers: 8,
            route: "dobble-hp"
        },
        {
            title: "Jungle Speed",
            genres: ["Card Matching", "Fast Pace"],
            averageDuration: 20,
            minPlayers: 2,
            maxPlayers: 10,
            route: "jungle-speed"
        },
        {
            title: "Santa Cookie Elf Candy Snowman",
            genres: ["Card Matching", "Fast Pace"],
            averageDuration: 30,
            minPlayers: 3,
            maxPlayers: 8,
            route: "santa-cookie-elf-candy-snowman"
        },
        {
            title: "Secret Hitler",
            genres: ["Bluffing", "Team Play"],
            averageDuration: 60,
            minPlayers: 5,
            maxPlayers: 10,
            route: "secret-hitler"
        },
        {
            title: "Ten",
            genres: ["Set Collection"],
            averageDuration: 30,
            minPlayers: 2,
            maxPlayers: 5,
            route: "ten"
        },
        {
            title: "Skyjo",
            genres: ["Set Collection"],
            averageDuration: 30,
            minPlayers: 2,
            maxPlayers: 8,
            route: "skyjo"
        },
        {
            title: "Sushi Go",
            genres: ["Set Collection"],
            averageDuration: 20,
            minPlayers: 2,
            maxPlayers: 5,
            route: "sushi-go"
        },
        {
            title: "Virus",
            genres: ["Set Collection", "Fast Pace"],
            averageDuration: 20,
            minPlayers: 2,
            maxPlayers: 6,
            route: "virus"
        },
        {
            title: "Panic Lab",
            genres: ["Card Matching", "Fast Pace"],
            averageDuration: 30,
            minPlayers: 2,
            maxPlayers: 10,
            route: "panic-lab"
        },
        {
            title: "Sherlock",
            genres: ["Clue Deduction"],
            averageDuration: 30,
            minPlayers: 2,
            maxPlayers: 10,
            route: "sherlock"
        },
        {
            title: "Sagrada",
            genres: ["Set Collection"],
            averageDuration: 45,
            minPlayers: 1,
            maxPlayers: 6,
            route: "sagrada"
        },
        {
            title: "Secret Code",
            genres: ["Clue Deduction", "Team Play"],
            averageDuration: 45,
            minPlayers: 1,
            maxPlayers: 6,
            route: "secret-code"
        }
    ]

    return games
}