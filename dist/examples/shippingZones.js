"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const youcan_1 = __importDefault(require("youcan"));
const myStore = new youcan_1.default("YOUCAN_STORE_ACCESS_TOKEN");
myStore.shippingZones
    .getShippingZones({})
    .then((shippingZones) => {
    console.log(shippingZones);
})
    .catch((error) => {
    console.error(error.response.data);
});
myStore.shippingZones
    .getAllShippingZones()
    .then((shippingZones) => {
    console.log(shippingZones);
})
    .catch((error) => {
    console.error(error.response.data);
});
myStore.shippingZones
    .getShippingZoneById("54fc90b0-53db-4475-9ba3-95823e23c5f5")
    .then((shippingZone) => {
    console.log(shippingZone);
})
    .catch((error) => {
    console.error(error.response.data);
});
myStore.shippingZones
    .createShippingZone({
    name: "kirwako shipping zone",
    display_name: "kirwako shipping zone",
    countries: ["US"],
})
    .then((shippingZone) => {
    console.log(shippingZone);
})
    .catch((error) => {
    console.error(error.response.data);
});
myStore.shippingZones
    .updateShippingZone('26002f64-afd8-4291-aa5e-cc54a68767ff', {
    name: 'kirwako shipping zone updated',
    display_name: 'kirwako shipping zone updated',
    countries: ['US'],
})
    .then((shippingZone) => {
    console.log(shippingZone);
})
    .catch((error) => {
    console.error(error.response.data);
});
myStore.shippingZones
    .deleteShippingZone('26002f64-afd8-4291-aa5e-cc54a68767ff')
    .then((result) => {
    console.log(result);
})
    .catch((error) => {
    console.error(error.response.data);
});
myStore.shippingZones
    .createShippingRate('41e24f42-3c57-439a-bb5f-7cf6f47a6ff9', [
    {
        min: 12,
        price: 12,
    },
])
    .then((shippingRate) => {
    console.log(shippingRate);
})
    .catch((error) => {
    console.error(error.response.data);
});
myStore.shippingZones
    .updateShippingRate('41e24f42-3c57-439a-bb5f-7cf6f47a6ff9', [
    {
        min: 120,
        price: 120,
    },
])
    .then((shippingRate) => {
    console.log(shippingRate);
})
    .catch((error) => {
    console.error(error.response.data);
});
