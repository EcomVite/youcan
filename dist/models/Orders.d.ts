import { OrderSortingEnum } from '../constants/enum/Order';
declare class YouCanOrders {
    getOrders({ limit, page, sort_field, include, q, }: {
        limit?: number;
        page?: number;
        sort_field?: OrderSortingEnum;
        include?: string;
        q?: string;
    }): Promise<{
        data: IOrderResponse[];
        meta: IMetaResponse;
    }>;
    getAllOrders(): Promise<{
        data: IOrderResponse[];
    }>;
    getOrderById(orderId: string, include?: string): Promise<IOrderResponse>;
    createOrder(order: IOrder): Promise<IOrderResponse>;
    closeOrder(orderId: string, cancel_order?: boolean): Promise<IOrderCloseResponse>;
    fulfillOrder({ orderId, seller_note, tracking_number, }: {
        orderId: string;
        seller_note?: string;
        tracking_number?: string;
    }): Promise<IOrderCloseResponse>;
    payOrder(orderId: string): Promise<IOrderCloseResponse>;
}
export default YouCanOrders;
