interface IReview {
	ratings: number;
	email: string;
	first_name: string;
	last_name?: string;
	content?: string;
	images?: File[];
}

interface IReviewResponse {
	id: string;
	ratings: number;
	first_name: string;
	last_name: string;
	content: string;
	images_urls: any[];
	created_at: Date;
}


interface IDeleteReviewResponse {
	message?: string;
	http_code?: number;
	code?: number;
	type?: string;
	data?: any;
	status?: number;
	detail?: string;
	meta?: any[];
}
