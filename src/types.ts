export enum SortBy {
    Word = 'word',
    Id = 'id',
};
export const defaultSortBy = SortBy.Word;

export enum SortOrder {
    Asc = 0,
    Desc,
};
export const defaultSortOrder = SortOrder.Asc;

export type Word = {
    id: number,
    word: string,
    favorite: boolean,
    def?: string,
    tags?: string[],
    dict_def?: string,
    cache?: WordCache,
};

export type WordCache = {
    word: string,
    def?: string,
    dict_def?: string,
    tags?: string[],
};

export type WordList = {
    words: Word[],
    next_id: number,
    sort_by: SortBy,
    sort_order: SortOrder,
    key: string,
};

export type WordEvent = {
    word: Word,
    key: string
};

export type SortEvent = {
    sort_by: SortBy,
    sort_order: SortOrder,
    key: string
};

export type FilterEvent = {
    search: string,
    key: string
};

export type RemoveTagEvent = {
    index: number,
};



