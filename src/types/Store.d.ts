interface IStoreDetailsResponse {
	slug: string;
	name: string;
	email: string;
	due_amount: number;
	balance: number;
	unpaid_invoices_amount: number;
	store_id: string;
	currency: { code: string; symbol: string };
	domain: string;
	status: number;
	status_text: string;
	closed_at: Date | null;
	pack_id: string;
	logo: string;
	first_name: string;
	last_name: string;
	full_name: string;
	phone: string;
	bio: string | null;
	website: string | null;
	notices: any[];
}

interface IStorePacksResponse {
	id: string;
	name: string;
	debit_day: number;
	is_default: number;
	created_at: Date;
	updated_at: Date;
	deleted_at: Date | null;
	max_users: number;
	max_ca: number;
	price: number;
	is_selected: boolean;
	rates: any[];
}

interface IProfit {
	earnings: string;
	orders_count: number;
}

interface IStoreProfitResponse {
	storeEarningsOverview: {
		today: IProfit;
		yesterday: IProfit;
		week: IProfit;
		month: IProfit;
		year: IProfit;
		all_time: IProfit;
		orders_amount: {
			average: string;
			max: string;
			min: string;
		};
	};
}

interface IStoreSupportHelp {
	type?: number;
	subject: string;
	content: string;
	fil?: File;
}

interface IStoreSupportHelpResponse {
	message: string;
	type: string;
}
