import axios from 'axios';
import { youCanApiRoutes } from '../routes/YouCanApiRoutes';

class YouCanStore {
	async getDetails(): Promise<IStoreDetailsResponse> {
		const response = await axios.get(youCanApiRoutes.store.details);
		return response.data;
	}

	async getPacks(): Promise<{ packs: IStorePacksResponse[] }> {
		const response = await axios.get(youCanApiRoutes.store.packs);
		return response.data;
	}

	async getProfit(): Promise<IStoreProfitResponse> {
		const response = await axios.get(youCanApiRoutes.store.profit);
		return response.data;
	}

	async createSupportTicket(ticket: IStoreSupportHelp): Promise<IStoreSupportHelpResponse> {
		const response = await axios.post(youCanApiRoutes.store.supportHelp, ticket);
		return response.data;
	}

}

export default YouCanStore;
