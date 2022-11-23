import YouCan from "../index";

const myStore = new YouCan("YOUCAN_STORE_ACCESS_TOKEN");

myStore.store
	.getDetails()
	.then((store) => {
		console.log(store);
	})
	.catch((error) => {
		console.error(error.response.data);
	})

myStore.store
	.getPacks()
	.then((packs) => {
		console.log(packs);
	})
	.catch((error) => {
		console.error(error.response.data);
	})

myStore.store
	.getProfit()
	.then((packs) => {
		console.log(packs);
	})
	.catch((error) => {
		console.error(error.response.data);
	})

myStore.store
	.createSupportTicket({content: "testing create ticket from api of youcan", subject: "Just test create ticket from api"  })
	.then((ticket) => {
		console.log(ticket);
	})
	.catch((error) => {
		console.error(error.response.data);
	})