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
class YouCanCustomers {
    getCustomers({ limit, page, include, q, }) {
        return __awaiter(this, void 0, void 0, function* () {
            let query = '';
            if (limit) {
                query += `limit=${limit}&`;
            }
            if (page) {
                query += `page=${page}&`;
            }
            if (include) {
                query += `include=${include}&`;
            }
            if (q) {
                query += `q=${q}&`;
            }
            const response = yield axios_1.default.get(`${YouCanApiRoutes_1.youCanApiRoutes.customers.show}?${query}`);
            return response.data;
        });
    }
    getAllCustomers() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.getCustomers({ limit: 100, page: 1 });
            const youCanCustomers = data.data;
            if (data.meta.pagination.total_pages > 1) {
                for (let i = 2; i <= data.meta.pagination.total_pages; i++) {
                    const newData = yield this.getCustomers({
                        limit: data.meta.pagination.per_page,
                        page: i,
                    });
                    youCanCustomers.push(...newData.data);
                }
            }
            return { data: youCanCustomers };
        });
    }
    getCustomerById(customerId, include) {
        return __awaiter(this, void 0, void 0, function* () {
            let includeResource = '';
            if (include) {
                includeResource = `?include=${include}`;
            }
            const response = yield axios_1.default.get(`${YouCanApiRoutes_1.youCanApiRoutes.customers.get(customerId)}${includeResource}`);
            return response.data;
        });
    }
    createCustomer(order) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield axios_1.default.post(YouCanApiRoutes_1.youCanApiRoutes.customers.create, order);
            return response.data;
        });
    }
    deleteCustomer(customerId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield axios_1.default.delete(YouCanApiRoutes_1.youCanApiRoutes.customers.delete(customerId));
            return response.data;
        });
    }
    updateCustomer(customerId, customer) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield axios_1.default.put(YouCanApiRoutes_1.youCanApiRoutes.customers.update(customerId), customer);
            return response.data;
        });
    }
    createCustomerAddress(customerId, address) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield axios_1.default.post(YouCanApiRoutes_1.youCanApiRoutes.customers.createAddress(customerId), address);
            return response.data;
        });
    }
    updateCustomerAddress(customerId, addressId, address) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield axios_1.default.put(YouCanApiRoutes_1.youCanApiRoutes.customers.updateAddress(customerId, addressId), address);
            return response.data;
        });
    }
}
exports.default = YouCanCustomers;
