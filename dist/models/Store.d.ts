declare class YouCanStore {
    getDetails(): Promise<IStoreDetailsResponse>;
    getPacks(): Promise<{
        packs: IStorePacksResponse[];
    }>;
    getProfit(): Promise<IStoreProfitResponse>;
    createSupportTicket(ticket: IStoreSupportHelp): Promise<IStoreSupportHelpResponse>;
}
export default YouCanStore;
