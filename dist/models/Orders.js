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
class YouCanOrders {
    getOrders({ limit, page, sort_field, include, q, }) {
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
            if (q) {
                query += `q=${q}&`;
            }
            const response = yield axios_1.default.get(`${YouCanApiRoutes_1.youCanApiRoutes.orders.show}?${query}`);
            return response.data;
        });
    }
    getAllOrders() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.getOrders({ limit: 100, page: 1 });
            const youCanOrders = data.data;
            if (data.meta.pagination.total_pages > 1) {
                for (let i = 2; i <= data.meta.pagination.total_pages; i++) {
                    const newData = yield this.getOrders({
                        limit: data.meta.pagination.per_page,
                        page: i,
                    });
                    youCanOrders.push(...newData.data);
                }
            }
            return { data: youCanOrders };
        });
    }
    getOrderById(orderId, include) {
        return __awaiter(this, void 0, void 0, function* () {
            let includeResource = '';
            if (include) {
                includeResource = `?include=${include}`;
            }
            const response = yield axios_1.default.get(`${YouCanApiRoutes_1.youCanApiRoutes.orders.get(orderId)}${includeResource}`);
            return response.data;
        });
    }
    createOrder(order) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield axios_1.default.post(YouCanApiRoutes_1.youCanApiRoutes.orders.create, order);
            return response.data;
        });
    }
    closeOrder(orderId, cancel_order) {
        return __awaiter(this, void 0, void 0, function* () {
            let query = '';
            if (cancel_order) {
                query += `cancel_order=${cancel_order}`;
            }
            const response = yield axios_1.default.put(`${YouCanApiRoutes_1.youCanApiRoutes.orders.close(orderId)}?${query}`);
            return response.data;
        });
    }
    fulfillOrder({ orderId, seller_note, tracking_number, }) {
        return __awaiter(this, void 0, void 0, function* () {
            let query = '';
            if (seller_note) {
                query += `seller_note=${seller_note}&`;
            }
            if (tracking_number) {
                query += `tracking_number=${tracking_number}`;
            }
            const response = yield axios_1.default.put(`${YouCanApiRoutes_1.youCanApiRoutes.orders.fulfill(orderId)}?${query}`);
            return response.data;
        });
    }
    payOrder(orderId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield axios_1.default.put(YouCanApiRoutes_1.youCanApiRoutes.orders.pay(orderId));
            return response.data;
        });
    }
}
exports.default = YouCanOrders;
