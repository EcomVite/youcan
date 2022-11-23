export declare const YOUCAN_BASE_URL = "https://api.youcan.shop";
export declare const youCanApiRoutes: {
    products: {
        get: (productId: string) => string;
        show: string;
        create: string;
        update: (productId: string) => string;
        delete: (productId: string) => string;
    };
    store: {
        details: string;
        packs: string;
        profit: string;
        supportHelp: string;
    };
    reviews: {
        show: string;
        create: (productId: string) => string;
        get: (productReviewId: string) => string;
        update: (productReviewId: string) => string;
        delete: (productReviewId: string) => string;
        showProductReviews: (productId: string) => string;
        reject: (reviewId: string) => string;
        approve: (reviewId: string) => string;
    };
    orders: {
        show: string;
        get: (orderId: string) => string;
        create: string;
        close: (orderId: string) => string;
        fulfill: (orderId: string) => string;
        pay: (orderId: string) => string;
    };
    resthooks: {
        show: string;
        subscribe: string;
        unsubscribe: (resthookId: string) => string;
    };
    customers: {
        show: string;
        get: (id: string) => string;
        create: string;
        delete: (id: string) => string;
        update: (id: string) => string;
        createAddress: (id: string) => string;
        updateAddress: (id: string, addressId: string) => string;
    };
    coupons: {
        show: string;
        get: (couponId: string) => string;
        create: string;
        delete: (couponId: string) => string;
        update: (couponId: string) => string;
    };
    categories: {
        show: string;
        get: (categoryId: string) => string;
        create: string;
        delete: (categoryId: string) => string;
        update: (categoryId: string) => string;
    };
    languages: {
        show: string;
        set: (languageId: string) => string;
    };
    menus: {
        show: string;
        get: (categoryId: string) => string;
        create: string;
        update: (categoryId: string) => string;
    };
    pages: {
        show: string;
        get: (pageId: string) => string;
        create: string;
        delete: (pageId: string) => string;
        update: (pageId: string) => string;
    };
    shippingZones: {
        show: string;
        get: (shippingZoneId: string) => string;
        create: string;
        delete: (shippingZoneId: string) => string;
        update: (shippingZoneId: string) => string;
        createShippingRate: (shippingZoneId: string) => string;
        upadateShippingRate: (shippingZoneId: string) => string;
    };
    upsells: {
        show: string;
        get: (categoryId: string) => string;
        create: string;
        delete: (categoryId: string) => string;
        update: (categoryId: string) => string;
    };
    productInventory: {
        inventoryIncerement: (productId: string) => string;
        inventoryDecrement: (productId: string) => string;
    };
};
