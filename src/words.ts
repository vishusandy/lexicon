import { type Word, type WordList, defaultSortBy, defaultSortOrder, SortBy, SortOrder } from './types';
import { browser } from '$app/environment';

// const defaultWords: Array<Word> = ['Malapropism', 'Eggcorn', 'Malaphor', 'Promulgate', 'Complect', 'Sluice', 'Excoriate', 'Autoantonym', 'Subsume', 'Moribund', 'Alacrity', 'Folderol', 'Rapt', 'Tacit', 'Licentious', 'Priori', 'Posteriori'].sort().map((word, i) => ({
//     word: word,
//     id: i,
//     def: undefined,
// }));
const defaultWords: Word[] = [];

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
    const stored = (browser) ? localStorage.getItem(key) : null;
    const list: WordList = (stored) ? JSON.parse(stored) : list_blank(key);
    return list;
}

export function list_add(list: WordList, word: string, def?: string): number {
    const w: Word = { word, id: list.next_id, def };
    list.next_id += 1;
    return list.words.push(w) - 1;
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

    if (def) {
        list.words[i].def = def;
    }

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

export function get_word(list: WordList, id: number): Word | undefined {
    return list.words.find(w => w.id == id);
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
                // console.log('Alpha asc');
                sort = (a: Word, b: Word) => {
                    return b.word.localeCompare(a.word);
                }
            } else {
                // console.log('Alpha desc');
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
        let phrase = phrases[i];
        if (phrase != '' && !word.word.toLowerCase().includes(phrase) && (!word.def || !word.def.toLowerCase().includes(phrase))) {
            return false;
        }
    }
    return true;
}

function isVisible(domElement: HTMLElement) {
    return new Promise(resolve => {
        const o = new IntersectionObserver(([entry]) => {
            resolve(entry.intersectionRatio === 1);
            o.disconnect();
        });
        o.observe(domElement);
    });
}

export async function scrollToWord(key: string, id: number) {
    console.log('checking scroll');
    let word = document.getElementById(key + "-" + id);
    if (word) {
        console.log('word found');
        const vis = await isVisible(word);
        if (!vis) {
            console.log('scrolling word into view');
            word.classList.add('highlight');
            word.scrollIntoView({ behavior: "smooth", block: "center" });
            setTimeout(() => {
                word?.classList.remove('highlight');
            }, 3000);
        } else {
            console.log('word is still visible');
        }
    }
}
