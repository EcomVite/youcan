"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const myStore = new index_1.default("YOUCAN_STORE_ACCESS_TOKEN");
myStore.coupons
    .getCoupons({ limit: 1 })
    .then((coupons) => {
    console.log(coupons.data);
})
    .catch((error) => {
    console.error(error.response.data);
});
myStore.coupons
    .getAllCoupons()
    .then((coupons) => {
    console.log(coupons.data);
})
    .catch((error) => {
    console.error(error.response.data);
});
myStore.coupons
    .getCouponById("edfde3c3-9901-48b0-8755-bfa0bf3bbd76")
    .then((coupons) => {
    console.log(coupons);
})
    .catch((error) => {
    console.error(error.response.data);
});
myStore.coupons
    .createCoupon({
    code: "kirwako",
    description: "Kirwako Coupon",
    product_ids: ["6ffb073e-dcab-47c7-8a7a-35db1ba88cb1"],
    start_date: new Date(),
    end_date: new Date(),
    type: 1,
    value: 10,
})
    .then((coupons) => {
    console.log(coupons);
})
    .catch((error) => {
    console.error(error.response.data);
});
myStore.coupons
    .updateCoupon('b2e0de7c-d66b-4b3a-88ff-65fd0618adf1', {
    code: 'kirwako',
    description: 'Kirwako Coupon',
    product_ids: ['6ffb073e-dcab-47c7-8a7a-35db1ba88cb1'],
    start_date: new Date(),
    end_date: new Date(),
    type: 1,
    value: 10,
})
    .then((coupons) => {
    console.log(coupons);
})
    .catch((error) => {
    console.error(error.response.data);
});
myStore.coupons
    .deleteCoupon("b2e0de7c-d66b-4b3a-88ff-65fd0618adf1")
    .then((result) => {
    console.log(result);
})
    .catch((error) => {
    console.error(error.response.data);
});
