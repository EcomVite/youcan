import { ProductSortingEnum } from '../constants/enum/Product';
declare class YouCanProducts {
    getProductById(productId: string, { include }: {
        include?: string;
    }): Promise<IProductResponse>;
    getProducts({ limit, page, sort_field, include, }: {
        limit?: number;
        page?: number;
        sort_field?: ProductSortingEnum;
        include?: string;
    }): Promise<{
        data: IProductResponse[];
        meta: IMetaResponse;
    }>;
    getAllProducts(): Promise<{
        data: IProductResponse[];
    }>;
    createProduct(product: IProduct): Promise<IProductResponse>;
    updateProduct(productId: string, product: IProduct): Promise<IProductResponse>;
    deleteProduct(productId: string): Promise<IDeleteProductResponse>;
}
export default YouCanProducts;
