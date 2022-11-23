import axios from 'axios';
import { youCanApiRoutes } from '../routes/YouCanApiRoutes';

class YouCanMenus {
	async getMenus(): Promise< IMenuResponse[]> {
		const response = await axios.get(youCanApiRoutes.menus.show);
		return response.data;
	}

	async getMenuById(menuId: string): Promise<IMenuResponse> {
		const response = await axios.get(youCanApiRoutes.menus.get(menuId));
		return response.data;
	}

	async createMenu(menu: IMenu): Promise<IMenuResponse> {
		const response = await axios.post(youCanApiRoutes.menus.create, menu);
		return response.data;
	}

	async updateMenu(
		menuId: string,
		menu: IMenu
	): Promise<IMenuResponse> {
		const response = await axios.put(
			youCanApiRoutes.menus.update(menuId),
			menu
		);

		return response.data;
	}

}

export default YouCanMenus;
