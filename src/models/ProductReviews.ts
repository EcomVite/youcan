import axios from 'axios';
import { youCanApiRoutes } from '../routes/YouCanApiRoutes';

class YouCanProductReviews {
	// product reviews not completed yet
	async getAllReviews(): Promise<{data: IProductReviewsResponse, meta: IMetaResponse}> {
		const response = await axios.get(youCanApiRoutes.productReviews.show);
		return response.data;
	}

}

export default YouCanProductReviews;
