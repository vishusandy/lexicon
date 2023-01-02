import { type Word, type WordCache, type WordList, defaultSortBy, defaultSortOrder, SortBy, SortOrder } from './types';
import { browser } from '$app/environment';

const defaultWords: Array<Word> = ['Malapropism', 'Eggcorn', 'Malaphor', 'Promulgate', 'Complect', 'Sluice', 'Excoriate', 'Autoantonym', 'Subsume', 'Moribund', 'Alacrity', 'Folderol', 'Rapt', 'Tacit', 'Licentious', 'Priori', 'Posteriori'].sort().map((word, i) => (word_cache({
    word: word,
    id: i,
    def: undefined,
    favorite: false,
    tags: undefined,
    dict_def: undefined,
})));

function new_word_cache(word: Word): WordCache {
    return {
        word: word.word.toLowerCase(),
        def: word.def?.toLocaleLowerCase(),
        dict_def: word.dict_def?.toLocaleLowerCase(),
        tags: word.tags?.map(t => t.toLowerCase()),
    };
}

export function word_cache(word: Word) {
    word.cache = new_word_cache(word);
    return word;
}

export function list_blank(key: string): WordList {
    const list = {
        "words": defaultWords,
        "next_id": defaultWords.length,
        "sort_by": defaultSortBy,
        "sort_order": defaultSortOrder,
        "key": key
    };
    list_save(list);
    return list;
}

export function list_init(key: string): WordList {
    // if (browser) {
    //     localStorage.removeItem(key);
    // }
    const stored = (browser) ? localStorage.getItem(key) : null;
    const list: WordList = (stored) ? JSON.parse(stored) : list_blank(key);
    return list;
}

export function list_add(list: WordList, word: Word): number {
    // let w: Word = { word, id: list.next_id, def, favorite: false, tags: undefined, cache: undefined };
    word_cache(word);
    word.id = list.next_id;
    list.next_id += 1;
    return list.words.push(word) - 1;
}

export function list_update(list: WordList, id: number, word?: string, def?: string): boolean {
    if (word === undefined && def === undefined) return false;

    const i = list.words.findIndex(w => w.id == id);
    if (i < 0) {
        return false;
    }

    if (word) {
        list.words[i].word = word;
    }

    if (def !== undefined) {
        list.words[i].def = def;
    }

    word_cache(list.words[i]);

    return true;
}

export function list_remove(list: WordList, id: number): boolean {
    const i = list.words.findIndex(w => w.id == id);
    if (i >= 0) {
        list.words.splice(i, 1);
        return true;
    }
    return false;
}

export function list_sort(list: WordList) {
    list.words.sort(sort_fn(list.sort_by, list.sort_order));
}

export function list_save(list: WordList) {
    if (browser) {
        localStorage.setItem(list.key, JSON.stringify(list));
    }
}

function sort_fn(sort_by: SortBy, sort_order: SortOrder): (a: Word, b: Word) => number {
    let sort;

    switch (sort_by) {
        case SortBy.Id:
            if (sort_order == SortOrder.Asc) {
                // console.log('Id asc');
                sort = (a: Word, b: Word) => {
                    return a.id - b.id;
                };
            } else {
                // console.log('Id desc');
                sort = (a: Word, b: Word) => {
                    return b.id - a.id;
                };
            }
            break;
        case SortBy.Word:
            if (sort_order == SortOrder.Desc) {
                // console.log('Word asc');
                sort = (a: Word, b: Word) => {
                    return b.word.localeCompare(a.word);
                }
            } else {
                // console.log('Word desc');
                sort = (a: Word, b: Word) => {
                    return a.word.localeCompare(b.word);
                };
            }
            break;
    }
    return sort;
}

// returns true if the word should be shown
export function filter_word(phrases: string[], word: Word): boolean {
    for (let i = 0; i < phrases.length; i++) {
        if (!match_word_phrase(word, phrases[i].toLowerCase())) {
            return false;
        }
    }
    return true;
}

function match_word_phrase(word: Word, phrase: string): boolean {

    return phrase == '' || word.cache === undefined
        || word.cache.word.includes(phrase)
        || (word.cache.def !== undefined && word.cache.def.includes(phrase))
        || (word.cache.dict_def !== undefined && word.cache.dict_def.includes(phrase))
        || (word.cache.tags !== undefined && word.cache.tags.some(t => t == phrase));

    // if (!word.cache) { return false; }
    // return phrase != '' && !word.cache.word.includes(phrase)
    //     && (!word.cache.def || !word.cache.def.includes(phrase))
    //     && (!word.cache.dict_def || !word.cache.dict_def.includes(phrase))
    //     && (!word.cache.tags || !word.cache.tags.some(t => t == phrase))
    //     ;
}

