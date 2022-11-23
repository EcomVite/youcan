declare class YouCanCoupons {
    getCoupons({ limit, page, }: {
        limit?: number;
        page?: number;
    }): Promise<{
        data: ICouponResponse[];
        meta: IMetaResponse;
    }>;
    getAllCoupons(): Promise<{
        data: ICouponResponse[];
    }>;
    getCouponById(couponId: string): Promise<ICouponResponse>;
    createCoupon(coupon: ICoupon): Promise<ICouponResponse>;
    updateCoupon(couponId: string, coupon: ICoupon): Promise<ICouponResponse>;
    deleteCoupon(couponId: string): Promise<IDeleteCouponResponse>;
}
export default YouCanCoupons;
