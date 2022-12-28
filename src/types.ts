export enum SortBy {
    Word = 'word',
    Id = 'id',
}
export const defaultSortBy = SortBy.Word;

export enum SortOrder {
    Asc = 0,
    Desc,
}
export const defaultSortOrder = SortOrder.Asc;

export type Word = {
    id: number,
    word: string,
    def?: string,
}

export type WordList = {
    words: Word[],
    next_id: number,
    sort_by: SortBy,
    sort_order: SortOrder,
    key: string,
}

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
