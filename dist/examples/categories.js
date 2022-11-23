"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const myStore = new index_1.default("YOUCAN_STORE_ACCESS_TOKEN");
myStore.categories
    .getCategories({ limit: 1 })
    .then((categories) => {
    console.log(categories.data);
})
    .catch((error) => {
    console.error(error.response.data);
});
myStore.categories
    .getAllCategories()
    .then((categories) => {
    console.log(categories.data);
})
    .catch((error) => {
    console.error(error.response.data);
});
myStore.categories
    .getCategoryById("8baeeb27-8a60-47f3-8539-1c726bfc9f68")
    .then((category) => {
    console.log(category);
})
    .catch((error) => {
    console.error(error.response.data);
});
myStore.categories
    .createCategory({
    name: "category created from api",
    slug: "category-created-from-api",
})
    .then((category) => {
    console.log(category);
})
    .catch((error) => {
    console.error(error.response.data);
});
myStore.categories
    .updateCategory('8baeeb27-8a60-47f3-8539-1c726bfc9f68', {
    name: 'kirwako',
    slug: 'category-2',
})
    .then((category) => {
    console.log(category);
})
    .catch((error) => {
    console.error(error.response.data);
});
myStore.categories
    .deleteCategory("9752bdb1-d28d-4dee-9afa-ec45fb58c5a5")
    .then((result) => {
    console.log(result);
})
    .catch((error) => {
    console.error(error.response.data);
});
