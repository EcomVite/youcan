interface IProductReviews {
}

interface IProductReviewsResponse {
	id: string;
	ratings: number;
	first_name: string;
	last_name: string;
	content: string;
	images_urls: any[];
	created_at: Date;
}

interface IProductReviewsMetaResponse {
	pagination: {
		total: number;
		count: number;
		per_page: number;
		current_page: number;
		total_pages: number;
		links: any;
	};
}

interface IDeleteProductReviewsResponse {
	status?: number;
	detail?: string;
	meta?: any[];
	message?: string;
	type?: string;
}
