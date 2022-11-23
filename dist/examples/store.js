"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const youcan_1 = __importDefault(require("youcan"));
const myStore = new youcan_1.default("YOUCAN_STORE_ACCESS_TOKEN");
myStore.store
    .getDetails()
    .then((store) => {
    console.log(store);
})
    .catch((error) => {
    console.error(error.response.data);
});
myStore.store
    .getPacks()
    .then((packs) => {
    console.log(packs);
})
    .catch((error) => {
    console.error(error.response.data);
});
myStore.store
    .getProfit()
    .then((packs) => {
    console.log(packs);
})
    .catch((error) => {
    console.error(error.response.data);
});
myStore.store
    .createSupportTicket({ content: "testing create ticket from api of youcan", subject: "Just test create ticket from api" })
    .then((ticket) => {
    console.log(ticket);
})
    .catch((error) => {
    console.error(error.response.data);
});
