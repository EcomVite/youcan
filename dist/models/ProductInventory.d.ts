declare class YouCanProductInventory {
    IncrementProductInventory(productId: string, productInventoryData: IProductInventory): Promise<IProductInventoryResponse>;
    DecrementProductInventory(productId: string, productInventoryData: IProductInventory): Promise<IProductInventoryResponse>;
}
export default YouCanProductInventory;
