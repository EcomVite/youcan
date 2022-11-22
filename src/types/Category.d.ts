interface ICategory {
	name: string;
	slug: string;
	description?: string;
	image?: Filestring;
	parent_id?: string;
	show_on_collection?: boolean;
	meta?: {
		title?: string;
		description?: string;
		images: File[];
	};
}

interface ICategoryResponse {
	id: string;
	name: string;
	image?: any;
	slug?: string;
	show_on_collection?: boolean;
	public_url?: string;
	description?: string;
	has_parent?: boolean;
	parent_id?: null;
	is_default?: false;
	images?: [];
	depth?: 0;
	meta?: any;
	created_at?: Date;
	updated_at?: Date;
	deleted_at?: null;
	parent?: [];
}

interface IDeleteCategoryResponse {
	message?: string;
	http_code?: number;
	code?: string;
	type?: string;
}
