"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const myStore = new index_1.default("YOUCAN_STORE_ACCESS_TOKEN");
myStore.languages
    .getLanguages()
    .then((languages) => {
    console.log(languages);
})
    .catch((error) => {
    console.error(error.response.data);
});
myStore.languages
    .setLanguageDefault("7cbe73d9-4502-4d4a-a72d-04998aec0e9d")
    .then((result) => {
    console.log(result);
})
    .catch((error) => {
    console.error(error.response.data);
});
