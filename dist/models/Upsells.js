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
class YouCanUpsells {
    getUpsells({ limit, page, }) {
        return __awaiter(this, void 0, void 0, function* () {
            let query = '';
            if (limit) {
                query += `limit=${limit}&`;
            }
            if (page) {
                query += `page=${page}&`;
            }
            const response = yield axios_1.default.get(`${YouCanApiRoutes_1.youCanApiRoutes.upsells.show}?${query}`);
            return response.data;
        });
    }
    getAllUpsells() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.getUpsells({ limit: 100, page: 1 });
            const youCanUpsells = data.data;
            if (data.meta.pagination.total_pages > 1) {
                for (let i = 2; i <= data.meta.pagination.total_pages; i++) {
                    const newData = yield this.getUpsells({
                        limit: data.meta.pagination.per_page,
                        page: i,
                    });
                    youCanUpsells.push(...newData.data);
                }
            }
            return { data: youCanUpsells };
        });
    }
    getUpsellById(upsellId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield axios_1.default.get(YouCanApiRoutes_1.youCanApiRoutes.upsells.get(upsellId));
            return response.data;
        });
    }
    createUpsell(upsell) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield axios_1.default.post(YouCanApiRoutes_1.youCanApiRoutes.upsells.create, upsell);
            return response.data;
        });
    }
    updateUpsell(upsellId, upsell) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield axios_1.default.put(YouCanApiRoutes_1.youCanApiRoutes.upsells.update(upsellId), upsell);
            return response.data;
        });
    }
    deleteUpsell(upsellId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield axios_1.default.delete(YouCanApiRoutes_1.youCanApiRoutes.upsells.delete(upsellId));
            return response.data;
        });
    }
}
exports.default = YouCanUpsells;
