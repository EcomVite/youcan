import axios from 'axios';
import { ResthooksEventEnum } from '../constants/enum/Resthooks';
import { youCanApiRoutes } from '../routes/YouCanApiRoutes';

class YouCanResthooks {

	async getAllResthooks(): Promise<IResthooks[]> {
		const response = await axios.get(youCanApiRoutes.resthooks.show);
		return response.data;
	}

	async resthookSubscribe(event: ResthooksEventEnum, target_url: string): Promise<IResthooksSubscribeResponse> {
		const response = await axios.post(youCanApiRoutes.resthooks.subscribe, {
			event,
			target_url,
		});
		return response.data;
	}

	async resthookUnsubscribe(resthookDd: string): Promise<IResthooksSubscribeResponse> {
		const response = await axios.post(youCanApiRoutes.resthooks.unsubscribe(resthookDd));
		return response.data;
	}

}

export default YouCanResthooks;
