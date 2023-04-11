export interface GlobalDataProps {
    columns: {
        data: ListProps<ColumnProps>;
        currentPage: number;
        total: number;
    },
    token: string;
    user: UserProps;
}
// <类型传参> ColumnProps
interface ListProps<p> {
    // key [id] 字符串
    [id: string]: p;
}
export interface ColumnProps {
    _id: string;
    title: string;
    description: string
}
export interface UserProps {
    isLogin: boolean;
    nickName?: string;
    _id?: string;
    column?: string;
    email?: string;
    description?: string;
    avatar?: ImageProps;
}
export interface ImageProps {
    _id?: string;
    url?: string;
    fitUrl?: string;
    createdAt?: string;
}