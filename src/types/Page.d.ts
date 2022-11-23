interface IPage {
	name: string;
	slug?: string;
	content?: string;
	visibility?: boolean;
	template?: string;
	is_using_page_builder?: boolean;
	meta?: any;
}

interface IPageResponse {
	id: string;
	name: string;
	slug: string;
	public_url: string;
	content: string;
	created_at: Date;
	meta: any;
}

interface IDeletePageResponse {
	message?: string;
	http_code?: number;
	code?: string;
	type?: string;
}
