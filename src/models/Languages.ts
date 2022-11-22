import axios from 'axios';
import { youCanApiRoutes } from '../routes/YouCanApiRoutes';

class YouCanLanguages {
	
	async getLanguages(): Promise<ILanguageResponse[]> {
		const response = await axios.get(youCanApiRoutes.languages.show);
		return response.data;
	}

	async setLanguageDefault(languageId: string): Promise<ILanguageResponse> {
		const response = await axios.put(youCanApiRoutes.languages.set(languageId));
		return response.data;
	}

}

export default YouCanLanguages;
