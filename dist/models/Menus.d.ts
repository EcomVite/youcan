declare class YouCanMenus {
    getMenus(): Promise<IMenuResponse[]>;
    getMenuById(menuId: string): Promise<IMenuResponse>;
    createMenu(menu: IMenu): Promise<IMenuResponse>;
    updateMenu(menuId: string, menu: IMenu): Promise<IMenuResponse>;
}
export default YouCanMenus;
