declare class YouCanCustomers {
    getCustomers({ limit, page, include, q, }: {
        limit?: number;
        page?: number;
        include?: string;
        q?: string;
    }): Promise<{
        data: ICustomerResponse[];
        meta: IMetaResponse;
    }>;
    getAllCustomers(): Promise<{
        data: ICustomerResponse[];
    }>;
    getCustomerById(customerId: string, include?: string): Promise<ICustomerResponse>;
    createCustomer(customer: ICustomer): Promise<ICustomerResponse>;
    deleteCustomer(customerId: string): Promise<ICustomerUpdateDeleteResponse>;
    updateCustomer(customerId: string, customer: ICustomer): Promise<ICustomerUpdateDeleteResponse>;
    createCustomerAddress(customerId: string, address: Partial<IAddress>): Promise<ICustomerResponse>;
    updateCustomerAddress(customerId: string, addressId: string, address: Partial<IAddress>): Promise<ICustomerUpdateDeleteResponse>;
}
export default YouCanCustomers;
