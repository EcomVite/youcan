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
class YouCanShippingZones {
    getShippingZones({ limit, page, sort_field, include, }) {
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
            const response = yield axios_1.default.get(`${YouCanApiRoutes_1.youCanApiRoutes.shippingZones.show}?${query}`);
            return response.data;
        });
    }
    getAllShippingZones() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.getShippingZones({ limit: 100, page: 1 });
            const youCanShippingZones = data.data;
            if (data.meta.pagination.total_pages > 1) {
                for (let i = 2; i <= data.meta.pagination.total_pages; i++) {
                    const newData = yield this.getShippingZones({
                        limit: data.meta.pagination.per_page,
                        page: i,
                    });
                    youCanShippingZones.push(...newData.data);
                }
            }
            return { data: youCanShippingZones };
        });
    }
    getShippingZoneById(shippingZoneId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield axios_1.default.get(YouCanApiRoutes_1.youCanApiRoutes.shippingZones.get(shippingZoneId));
            return response.data;
        });
    }
    createShippingZone(shippingZone) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield axios_1.default.post(YouCanApiRoutes_1.youCanApiRoutes.shippingZones.create, shippingZone);
            return response.data;
        });
    }
    updateShippingZone(shippingZoneId, shippingZone) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield axios_1.default.put(YouCanApiRoutes_1.youCanApiRoutes.shippingZones.update(shippingZoneId), shippingZone);
            return response.data;
        });
    }
    deleteShippingZone(shippingZoneId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield axios_1.default.delete(YouCanApiRoutes_1.youCanApiRoutes.shippingZones.delete(shippingZoneId));
            return response.data;
        });
    }
    createShippingRate(shippingZoneId, shippingRates) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield axios_1.default.post(YouCanApiRoutes_1.youCanApiRoutes.shippingZones.createShippingRate(shippingZoneId), { rates: shippingRates });
            return response.data;
        });
    }
    updateShippingRate(shippingZoneId, shippingRates) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield axios_1.default.put(YouCanApiRoutes_1.youCanApiRoutes.shippingZones.upadateShippingRate(shippingZoneId), { rates: shippingRates });
            return response.data;
        });
    }
}
exports.default = YouCanShippingZones;
