import { ResthooksEventEnum } from "../constants/enum/Resthooks";
import YouCan from "../index";

const myStore = new YouCan("YOUCAN_STORE_ACCESS_TOKEN");

myStore.resthooks
	.getAllResthooks()
	.then((resthooks) => {
		console.log(resthooks);
	})
	.catch((error) => {
		console.error(error.response.data);
	});

myStore.resthooks
	.resthookSubscribe(ResthooksEventEnum.ORDER_CREATE, "https://ecomvite.com/order/created")
	.then((resthook) => {
		console.log(resthook);
	})
	.catch((error) => {
		console.error(error.response.data);
	});

myStore.resthooks
	.resthookUnsubscribe("78f1d6cf-9466-49db-9150-70dfdf6cc94a")
	.then((resthook) => {
		console.log(resthook);
	})
	.catch((error) => {
		console.error(error.response.data);
	});