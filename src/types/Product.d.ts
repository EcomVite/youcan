interface IProductResponse {
	push(arg0: any): unknown;
	id: string;
	name: string;
	slug: string;
	public_url: string;
	thumbnail?: string;
	description?: string;
	price: number;
	compare_at_price?: number;
	cost_price?: null;
	visibility?: true;
	has_variants: boolean;
	variants_count?: 1;
	variant_options?: any;
	inventory?: 0;
	track_inventory?: true;
	you_save_amount?: 103;
	meta?: any;
	created_at?: Date;
	updated_at?: Date;
	deleted_at?: Date | boolean;
	images?: any;
}

interface IProductMetaResponse {
	pagination: {
		total: number;
		count: number;
		per_page: number;
		current_page:number;
		total_pages:number;
		links: any;
	};
}