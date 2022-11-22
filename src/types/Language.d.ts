interface ILanguageResponse {
	id: string;
	locale_code: string;
	direction: string;
	wording: {
		general: any;
		exception: any;
		auth: any;
		checkout: any;
		actions: any;
		gateways: any;
		order: any;
		cart: any;
		reviews: any;
		pages: any;
		marketing: any;
		Language: any;
		collection: any;
		messages: any;
		emails: any;
		image: any;
		shipping: any;
		billing: any;
		error_codes: any;
		print_order: any;
	};
	is_default: boolean;
}

interface ISetLanguageResponse {
	status: number;
	detail: string;
	meta: any;
}
