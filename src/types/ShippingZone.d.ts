interface IShippingZone {
	name: string;
	display_name: string;
	countries: any[] | null;
	is_free?: boolean;
	is_active?: boolean;
	rate_type?: string;
	rates?: IShippingRate[];
}

interface IShippingZoneResponse {
	id: string;
	name: string;
	display_name: string;
	countries: any[];
	is_free: boolean;
	is_active: boolean;
	rate_type: string;
	rates: IShippingRate[];
}

interface IShippingRate {
	id?: string;
	min: number;
	max?: number;
	price: number;
}

interface IDeleteUpdateShippingZoneResponse {
	message?: string;
	http_code?: number;
	code?: string;
	type?: string;
	data: null;
	status: number;
	detail: number;
	meta: any[];
}
