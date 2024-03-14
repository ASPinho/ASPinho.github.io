export interface Menu {
    title: string;
    route: string;
}

export function getHomePageMenus() {

    return [
        {
            title: "GamePicker",
            route: "/gamepicker"
        },
        {
            title: "Resume",
            route: "/resume"
        }
    ];
}