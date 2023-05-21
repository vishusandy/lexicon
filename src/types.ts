import type { DictionaryWord } from "./dictionary";

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
    dict_def?: DictionaryWord,
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
    version: number,
    auto_defs: boolean,
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

export type TagUpdatedEvent = {
    tag: string,
    index: number,
};

export type UpdateTagsEvent = {
    tags: string[],
    key: string
};

export type BackupEntry = {
    name: string,
    key: number,
    size: number,
};

export type NewBackup = {
    name: string,
};

export type NavLink = {
    name: string,
    url: string,
    page: string,
};


export function isWordList(list: any): list is WordList {
    return "words" in list &&
        "next_id" in list &&
        "sort_by" in list &&
        "sort_order" in list &&
        "key" in list;
}



// export type RefreshWordEvent = {
//     word: string,
//     key: string,
// };

