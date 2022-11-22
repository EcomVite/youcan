interface IResthooks {
	id: string;
	event: string;
	target_url: string;
}

interface IResthooksSubscribeResponse {
	id: string;
	status: number;
	detail: string;
	meta: any[];
}
