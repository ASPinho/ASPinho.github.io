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
            genres: ["Hot Potato","Player Elimination"],
            averageDuration: 15,
            minPlayers: 2,
            maxPlayers: 10,
            route: "/ek"
        },
        {
            title: "DorfRomantik",
            genres: ["Cooperative","City Building","Puzzle","Campaign"],
            averageDuration: 60,
            minPlayers: 1,
            maxPlayers: 6,
            route: "/romantik"
        },
        {
            title: "Ticket to Ride: Europe",
            genres: ["Cooperative","Route Building","Puzzle","Campaign"],
            averageDuration: 60,
            minPlayers: 2,
            maxPlayers: 5,
            route: "/ttr-europe"
        }
    ]

    return games
}