import { ShippingZoneSortingEnum } from '../constants/enum/ShippingZone';
declare class YouCanShippingZones {
    getShippingZones({ limit, page, sort_field, include, }: {
        limit?: number;
        page?: number;
        sort_field?: ShippingZoneSortingEnum;
        include?: string;
    }): Promise<{
        data: IShippingZoneResponse[];
        meta: IMetaResponse;
    }>;
    getAllShippingZones(): Promise<{
        data: IShippingZoneResponse[];
    }>;
    getShippingZoneById(shippingZoneId: string): Promise<IShippingZoneResponse>;
    createShippingZone(shippingZone: IShippingZone): Promise<IShippingZoneResponse>;
    updateShippingZone(shippingZoneId: string, shippingZone: IShippingZone): Promise<IDeleteUpdateShippingZoneResponse>;
    deleteShippingZone(shippingZoneId: string): Promise<IDeleteUpdateShippingZoneResponse>;
    createShippingRate(shippingZoneId: string, shippingRates: IShippingRate[]): Promise<IShippingZoneResponse>;
    updateShippingRate(shippingZoneId: string, shippingRates: IShippingRate[]): Promise<IDeleteUpdateShippingZoneResponse>;
}
export default YouCanShippingZones;
