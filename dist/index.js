"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const Categories_1 = __importDefault(require("./models/Categories"));
const Coupons_1 = __importDefault(require("./models/Coupons"));
const Customers_1 = __importDefault(require("./models/Customers"));
const Languages_1 = __importDefault(require("./models/Languages"));
const Menus_1 = __importDefault(require("./models/Menus"));
const Orders_1 = __importDefault(require("./models/Orders"));
const Pages_1 = __importDefault(require("./models/Pages"));
const ProductInventory_1 = __importDefault(require("./models/ProductInventory"));
const Reviews_1 = __importDefault(require("./models/Reviews"));
const Products_1 = __importDefault(require("./models/Products"));
const Resthooks_1 = __importDefault(require("./models/Resthooks"));
const ShippingZones_1 = __importDefault(require("./models/ShippingZones"));
const Store_1 = __importDefault(require("./models/Store"));
const Upsells_1 = __importDefault(require("./models/Upsells"));
const YouCanApiRoutes_1 = require("./routes/YouCanApiRoutes");
class YouCan {
    constructor(access_token) {
        axios_1.default.defaults.baseURL = YouCanApiRoutes_1.YOUCAN_BASE_URL;
        axios_1.default.interceptors.request.use((config) => {
            config.headers['Authorization'] = `Bearer ${access_token}`;
            return config;
        }, (error) => Promise.reject(error));
        this.products = new Products_1.default();
        this.store = new Store_1.default();
        this.reviews = new Reviews_1.default();
        this.orders = new Orders_1.default();
        this.resthooks = new Resthooks_1.default();
        this.customers = new Customers_1.default();
        this.coupons = new Coupons_1.default();
        this.categories = new Categories_1.default();
        this.languages = new Languages_1.default();
        this.menus = new Menus_1.default();
        this.pages = new Pages_1.default();
        this.shippingZones = new ShippingZones_1.default();
        this.upsells = new Upsells_1.default();
        this.productInventory = new ProductInventory_1.default();
    }
}
exports.default = YouCan;
