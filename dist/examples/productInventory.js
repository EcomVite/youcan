"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const youcan_1 = __importDefault(require("youcan"));
const myStore = new youcan_1.default("YOUCAN_STORE_ACCESS_TOKEN");
myStore.productInventory
    .IncrementProductInventory("d6f39bd3-1f63-4ee0-b774-4bf2d0cd88b4", {
    inventory: 33,
    variant_id: "88a405b3-3006-497d-861c-ef155452a353"
})
    .then((result) => {
    console.log(result);
})
    .catch((error) => {
    console.error(error.response.data);
});
myStore.productInventory
    .DecrementProductInventory("d6f39bd3-1f63-4ee0-b774-4bf2d0cd88b4", {
    inventory: 43,
    variant_id: "88a405b3-3006-497d-861c-ef155452a353"
})
    .then((result) => {
    console.log(result);
})
    .catch((error) => {
    console.error(error.response.data);
});
