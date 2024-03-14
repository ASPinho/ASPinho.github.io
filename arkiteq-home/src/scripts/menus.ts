export interface Menu {
    title: string;
    route: string;
}

export function getHomePageMenus() {

    return [
        {
            title: "GamePicker",
            route: "/game-picker"
        },
        {
            title: "Resume",
            route: "/resume"
        }
    ];
}