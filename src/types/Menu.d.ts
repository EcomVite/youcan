interface IMenu {
	name: string;
	slug: string;
	links?: any[];
}

interface IMenuResponse {
	id: string;
	name: string;
	slug: string;
	is_default: boolean;
	links: any[];
}

interface IDeleteMenuResponse {
	message?: string;
	http_code?: number;
	code?: string;
	type?: string;
}
