import { routes } from "@/shared/utils/routes";


export type MenuListItem = {
    text: string;
    url: string;
}

export const menuList: MenuListItem[] = [
    {
        text: 'HOME',
        url: routes.homeRoute()
    },
    {
        text: 'MENU',
        url: routes.menuRoute()
    },
    {
        text: 'EVENTS',
        url: routes.eventsRoute()
    },
]