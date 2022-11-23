"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const myStore = new index_1.default("YOUCAN_STORE_ACCESS_TOKEN");
myStore.upsells
    .getUpsells({ limit: 1 })
    .then((upsells) => {
    console.log(upsells);
})
    .catch((error) => {
    console.error(error.response.data);
});
myStore.upsells
    .getAllUpsells()
    .then((upsells) => {
    console.log(upsells);
})
    .catch((error) => {
    console.error(error.response.data);
});
myStore.upsells
    .getUpsellById("959c50f9-c2d7-4d45-82d3-15957adf3797")
    .then((upsell) => {
    console.log(upsell);
})
    .catch((error) => {
    console.error(error.response.data);
});
myStore.upsells
    .createUpsell({
    name: "kirwako upsell",
    product_id: "6ffb073e-dcab-47c7-8a7a-35db1ba88cb1",
    product_offer_ids: ["6ffb073e-dcab-47c7-8a7a-35db1ba88cb1"],
    actions: {
        btn_yes: {
            "size": "large",
            "title": "Yes",
            "bg_color": "#FFFFFF",
            "font_size": "large",
            "font_color": "#05BE35"
        },
        btn_no: {
            "size": "small",
            "title": "No",
            "bg_color": "#FFFFFF",
            "font_size": "small",
            "font_color": "#FF0000"
        }
    }
})
    .then((upsell) => {
    console.log(upsell);
})
    .catch((error) => {
    console.error(error.response.data);
});
myStore.upsells
    .updateUpsell('959c50f9-c2d7-4d45-82d3-15957adf3797', {
    name: 'kirwako upsell updated',
    product_id: '6ffb073e-dcab-47c7-8a7a-35db1ba88cb1',
    product_offer_ids: ['6ffb073e-dcab-47c7-8a7a-35db1ba88cb1'],
    actions: {
        btn_yes: {
            size: 'large',
            title: 'Yes',
            bg_color: '#FFFFFF',
            font_size: 'large',
            font_color: '#05BE35',
        },
        btn_no: {
            size: 'small',
            title: 'No',
            bg_color: '#FFFFFF',
            font_size: 'small',
            font_color: '#FF0000',
        },
    },
})
    .then((upsell) => {
    console.log(upsell);
})
    .catch((error) => {
    console.error(error.response.data);
});
myStore.upsells
    .deleteUpsell('959c50f9-c2d7-4d45-82d3-15957adf3797')
    .then((result) => {
    console.log(result);
})
    .catch((error) => {
    console.error(error.response.data);
});
