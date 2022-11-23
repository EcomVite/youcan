"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const youcan_1 = __importDefault(require("youcan"));
const myStore = new youcan_1.default("YOUCAN_STORE_ACCESS_TOKEN");
myStore.orders
    .getOrders({ limit: 3, page: 1 })
    .then((orders) => {
    console.log(orders.data);
})
    .catch((error) => {
    console.error(error.response.data);
});
myStore.orders
    .getAllOrders()
    .then((orders) => {
    console.log(orders.data);
})
    .catch((error) => {
    console.error(error.response.data);
});
myStore.orders
    .getOrderById("298e57b7-122c-4c91-b996-199ac84605ce")
    .then((order) => {
    console.log(order);
})
    .catch((error) => {
    console.error(error.response.data);
});
myStore.orders
    .createOrder({
    customer_id: "4c86c931-6908-4594-afe0-dea3e348119a",
    selected_shipping_estimation_id: "sr_8feb6668-4186-4194-987b-42691894036c",
    variants: []
})
    .then((order) => {
    console.log(order);
})
    .catch((error) => {
    console.error(error.response.data);
});
myStore.orders
    .closeOrder("298e57b7-122c-4c91-b996-199ac84605ce")
    .then((order) => {
    console.log(order);
})
    .catch((error) => {
    console.error(error.response.data);
});
myStore.orders
    .fulfillOrder({ orderId: "298e57b7-122c-4c91-b996-199ac84605ce" })
    .then((order) => {
    console.log(order);
})
    .catch((error) => {
    console.error(error.response.data);
});
myStore.orders
    .payOrder("298e57b7-122c-4c91-b996-199ac84605ce")
    .then((order) => {
    console.log(order);
})
    .catch((error) => {
    console.error(error.response.data);
});
