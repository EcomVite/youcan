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
class YouCanReviews {
    getReviews({ limit, page, sort_field, }) {
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
            const response = yield axios_1.default.get(`${YouCanApiRoutes_1.youCanApiRoutes.reviews.show}?${query}`);
            return response.data;
        });
    }
    getAllReviews() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.getReviews({ limit: 100, page: 1 });
            const youCanReviews = data.data;
            if (data.meta.pagination.total_pages > 1) {
                for (let i = 2; i <= data.meta.pagination.total_pages; i++) {
                    const newData = yield this.getReviews({
                        limit: data.meta.pagination.per_page,
                        page: i,
                    });
                    youCanReviews.push(...newData.data);
                }
            }
            return { data: youCanReviews };
        });
    }
    getReviewById(productReviewId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield axios_1.default.get(YouCanApiRoutes_1.youCanApiRoutes.reviews.get(productReviewId));
            return response.data;
        });
    }
    createReview(productId, productReview) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield axios_1.default.post(YouCanApiRoutes_1.youCanApiRoutes.reviews.create(productId), productReview);
            return response.data;
        });
    }
    updateReview(productReviewId, productReview) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield axios_1.default.put(YouCanApiRoutes_1.youCanApiRoutes.reviews.update(productReviewId), productReview);
            return response.data;
        });
    }
    deleteReview(productReviewId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield axios_1.default.delete(YouCanApiRoutes_1.youCanApiRoutes.reviews.delete(productReviewId));
            return response.data;
        });
    }
    getReviewsByProductId(productId, { limit, page, sort_field, }) {
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
            const response = yield axios_1.default.get(`${YouCanApiRoutes_1.youCanApiRoutes.reviews.showProductReviews(productId)}?${query}`);
            return response.data;
        });
    }
    getAllReviewsByProductId(productId) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.getReviewsByProductId(productId, {
                limit: 100,
                page: 1,
            });
            const youCanReviews = data.data;
            if (data.meta.pagination.total_pages > 1) {
                for (let i = 2; i <= data.meta.pagination.total_pages; i++) {
                    const newData = yield this.getReviewsByProductId(productId, {
                        limit: data.meta.pagination.per_page,
                        page: i,
                    });
                    youCanReviews.push(...newData.data);
                }
            }
            return { data: youCanReviews };
        });
    }
    rejectReview(reviewId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield axios_1.default.put(YouCanApiRoutes_1.youCanApiRoutes.reviews.reject(reviewId));
            return response.data;
        });
    }
    approveReview(reviewId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield axios_1.default.put(YouCanApiRoutes_1.youCanApiRoutes.reviews.approve(reviewId));
            return response.data;
        });
    }
}
exports.default = YouCanReviews;
