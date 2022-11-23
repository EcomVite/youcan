import { ReviewSortingEnum } from '../constants/enum/Review';
declare class YouCanReviews {
    getReviews({ limit, page, sort_field, }: {
        limit?: number;
        page?: number;
        sort_field?: ReviewSortingEnum;
    }): Promise<{
        data: IReviewResponse[];
        meta: IMetaResponse;
    }>;
    getAllReviews(): Promise<{
        data: IReviewResponse[];
    }>;
    getReviewById(productReviewId: string): Promise<IReviewResponse>;
    createReview(productId: string, productReview: IReview): Promise<IReviewResponse>;
    updateReview(productReviewId: string, productReview: IReview): Promise<IDeleteReviewResponse>;
    deleteReview(productReviewId: string): Promise<IDeleteReviewResponse>;
    getReviewsByProductId(productId: string, { limit, page, sort_field, }: {
        limit?: number;
        page?: number;
        sort_field?: ReviewSortingEnum;
    }): Promise<{
        data: IReviewResponse[];
        meta: IMetaResponse;
    }>;
    getAllReviewsByProductId(productId: string): Promise<{
        data: IReviewResponse[];
    }>;
    rejectReview(reviewId: string): Promise<IDeleteReviewResponse>;
    approveReview(reviewId: string): Promise<IDeleteReviewResponse>;
}
export default YouCanReviews;
