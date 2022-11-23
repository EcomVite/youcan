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
    getReviewById(reviewId: string): Promise<IReviewResponse>;
    createReview(productId: string, review: IReview): Promise<IReviewResponse>;
    updateReview(reviewId: string, review: IReview): Promise<IDeleteReviewResponse>;
    deleteReview(reviewId: string): Promise<IDeleteReviewResponse>;
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
