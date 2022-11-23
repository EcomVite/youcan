"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const YouCanApiRoutes_1 = require("../routes/YouCanApiRoutes");
class YouCanProducts {
    getProductById(productId, { include }) {
        return __awaiter(this, void 0, void 0, function* () {
            let query = '';
            if (include) {
                query += `include=${include}&`;
            }
            const response = yield axios_1.default.get(`${YouCanApiRoutes_1.youCanApiRoutes.products.get(productId)}?${query}`);
            return response.data;
        });
    }
    getProducts({ limit, page, sort_field, include, }) {
        return __awaiter(this, void 0, void 0, function* () {
            let query = '';
            if (limit) {
                query += `limit=${limit}&`;
            }
            if (page) {
                query += `page=${page}&`;
            }
            if (sort_field) {
                query += `sort_field=${sort_field}&`;
            }
            if (include) {
                query += `include=${include}&`;
            }
            const response = yield axios_1.default.get(`${YouCanApiRoutes_1.youCanApiRoutes.products.show}?${query}`);
            return response.data;
        });
    }
    getAllProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.getProducts({ limit: 100, page: 1 });
            const youCanProducts = data.data;
            if (data.meta.pagination.total_pages > 1) {
                for (let i = 2; i <= data.meta.pagination.total_pages; i++) {
                    const newData = yield this.getProducts({
                        limit: data.meta.pagination.per_page,
                        page: i,
                    });
                    youCanProducts.push(...newData.data);
                }
            }
            return { data: youCanProducts };
        });
    }
    createProduct(product) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield axios_1.default.post(YouCanApiRoutes_1.youCanApiRoutes.products.create, product);
            return response.data;
        });
    }
    updateProduct(productId, 
    // product: Partial<IProduct>
    product) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield axios_1.default.post(YouCanApiRoutes_1.youCanApiRoutes.products.update(productId), product);
            return response.data;
        });
    }
    deleteProduct(productId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield axios_1.default.delete(YouCanApiRoutes_1.youCanApiRoutes.products.delete(productId));
            return response.data;
        });
    }
}
exports.default = YouCanProducts;
