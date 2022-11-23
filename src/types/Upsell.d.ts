interface IUpsell {
	name: string;
	description?: string;
	product_id: string;
	product_offer_ids: string[];
	actions: {
		btn_yes: IUpsellAction;
		btn_no: IUpsellAction;
	};
	footer?: string;
}

interface IUpsellAction {
	title: string;
	size: string;
	bg_color: string;
	font_size: string;
	font_color: string;
}

interface IUpsellResponse {
	id: string;
	name: string;
	product_offer_ids: string[];
	description: string;
	footer: string;
	active: boolean;
	weight: string;
	actions: any;
}

interface IDeleteUpsellResponse {
	message?: string;
	http_code?: number;
	code?: string;
	type?: string;
}
