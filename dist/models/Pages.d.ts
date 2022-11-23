import { PageSortingEnum } from '../constants/enum/Page';
declare class YouCanPages {
    getPages({ limit, page, sort_field, q, }: {
        limit?: number;
        page?: number;
        sort_field?: PageSortingEnum;
        q?: string;
    }): Promise<{
        data: IPageResponse[];
        meta: IMetaResponse;
    }>;
    getAllPages(): Promise<{
        data: IPageResponse[];
    }>;
    getPageById(pageId: string): Promise<IPageResponse>;
    createPage(page: IPage): Promise<IPageResponse>;
    updatePage(pageId: string, page: IPage): Promise<IPageResponse>;
    deletePage(pageId: string): Promise<IDeletePageResponse>;
}
export default YouCanPages;
