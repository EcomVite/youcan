import { CategorySortingEnum } from '../constants/enum/Category';
declare class YouCanCategories {
    getCategories({ limit, page, sort_field, q, show_in_collection, only_top_level, }: {
        limit?: number;
        page?: number;
        sort_field?: CategorySortingEnum;
        q?: string;
        show_in_collection?: boolean;
        only_top_level?: boolean;
    }): Promise<{
        data: ICategoryResponse[];
        meta: IMetaResponse;
    }>;
    getAllCategories(): Promise<{
        data: ICategoryResponse[];
    }>;
    getCategoryById(categoryId: string): Promise<ICategoryResponse>;
    createCategory(category: ICategory): Promise<ICategoryResponse>;
    updateCategory(categoryId: string, category: ICategory): Promise<ICategoryResponse>;
    deleteCategory(categoryId: string): Promise<IDeleteCategoryResponse>;
}
export default YouCanCategories;
