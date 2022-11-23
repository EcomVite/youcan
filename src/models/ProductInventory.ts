import axios from 'axios';
import { youCanApiRoutes } from '../routes/YouCanApiRoutes';

class YouCanProductInventory {

	async IncrementProductInventory(productId: string, productInventoryData: IProductInventory): Promise<IProductInventoryResponse> {

		const response = await axios.put(youCanApiRoutes.productInventory.inventoryIncerement(productId), {
			inventory: productInventoryData.inventory,
			variant_id: productInventoryData.variant_id,
		});
		return response.data;
	}

	async DecrementProductInventory(productId: string, productInventoryData: IProductInventory): Promise<IProductInventoryResponse> {
		
		const response = await axios.put(youCanApiRoutes.productInventory.inventoryDecrement(productId), {
			inventory: productInventoryData.inventory,
			variant_id: productInventoryData.variant_id,
		});
		return response.data;
	}

}

export default YouCanProductInventory;
