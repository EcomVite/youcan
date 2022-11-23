declare class YouCanUpsells {
    getUpsells({ limit, page, }: {
        limit?: number;
        page?: number;
    }): Promise<{
        data: IUpsellResponse[];
        meta: IMetaResponse;
    }>;
    getAllUpsells(): Promise<{
        data: IUpsellResponse[];
    }>;
    getUpsellById(upsellId: string): Promise<IUpsellResponse>;
    createUpsell(upsell: IUpsell): Promise<IUpsellResponse>;
    updateUpsell(upsellId: string, upsell: IUpsell): Promise<IUpsellResponse>;
    deleteUpsell(upsellId: string): Promise<IDeleteUpsellResponse>;
}
export default YouCanUpsells;
