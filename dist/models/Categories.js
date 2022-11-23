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
class YouCanCategories {
    getCategories({ limit, page, sort_field, q, show_in_collection, only_top_level, }) {
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
            if (q) {
                query += `q=${q}&`;
            }
            if (show_in_collection) {
                query += `show_in_collection=${show_in_collection}&`;
            }
            if (only_top_level) {
                query += `only_top_level=${only_top_level}&`;
            }
            const response = yield axios_1.default.get(`${YouCanApiRoutes_1.youCanApiRoutes.categories.show}?${query}`);
            return response.data;
        });
    }
    getAllCategories() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.getCategories({ limit: 100, page: 1 });
            const youCanCategories = data.data;
            if (data.meta.pagination.total_pages > 1) {
                for (let i = 2; i <= data.meta.pagination.total_pages; i++) {
                    const newData = yield this.getCategories({
                        limit: data.meta.pagination.per_page,
                        page: i,
                    });
                    youCanCategories.push(...newData.data);
                }
            }
            return { data: youCanCategories };
        });
    }
    getCategoryById(categoryId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield axios_1.default.get(YouCanApiRoutes_1.youCanApiRoutes.categories.get(categoryId));
            return response.data;
        });
    }
    createCategory(category) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield axios_1.default.post(YouCanApiRoutes_1.youCanApiRoutes.categories.create, category);
            return response.data;
        });
    }
    updateCategory(categoryId, category) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield axios_1.default.put(YouCanApiRoutes_1.youCanApiRoutes.categories.update(categoryId), category);
            return response.data;
        });
    }
    deleteCategory(categoryId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield axios_1.default.delete(YouCanApiRoutes_1.youCanApiRoutes.categories.delete(categoryId));
            return response.data;
        });
    }
}
exports.default = YouCanCategories;
