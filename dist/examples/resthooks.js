"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const youcan_1 = __importDefault(require("youcan"));
const myStore = new youcan_1.default("YOUCAN_STORE_ACCESS_TOKEN");
myStore.resthooks
    .getAllResthooks()
    .then((resthooks) => {
    console.log(resthooks);
})
    .catch((error) => {
    console.error(error.response.data);
});
myStore.resthooks
    .resthookSubscribe("order.create" /* ResthooksEventEnum.ORDER_CREATE */, "https://ecomvite.com/order/created")
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
