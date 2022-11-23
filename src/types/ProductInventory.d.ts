interface IProductInventory {
	variant_id: string;
	inventory: number;
}

interface IProductInventoryResponse {
	id: string;
	variations: any;
	options: string[];
	values: string[];
	price: number;
	compare_at_price: number;
	weight: any;
	sku: any;
	barcode: any;
	inventory: number;
	is_selected: boolean;
	is_default: boolean;
	image: any;
	created_at: Date;
	updated_at: Date;
	product: any;
}
