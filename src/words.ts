import { type Word, type WordCache, type WordList, defaultSortBy, defaultSortOrder, SortBy, SortOrder } from './types';
import { browser } from '$app/environment';
import { dictionaryCache } from './dictionary';
import { cur_date } from './utils';
import { default_list } from './default_words';

// const default_word_list: string[] = ['Admonition', 'Adroit', 'Amalgamate', 'Amenity', 'Anathema', 'Anima', 'Animus', 'Annealing', 'Antithesis', 'Aplomb', 'Appurtenant', 'Apropos', 'Arbitrage', 'Argot', 'Artifice', 'Assiduous', 'Assiduously', 'Atavistic', 'Austere', 'Auteur', 'Balaclava', 'Bastion', 'Bellicose', 'Betide', 'Bifurcate', 'Blasé', 'Blithe', 'Bolide', 'Bolster', 'Buoy', 'Buoyant', 'Cacophonous', 'Cadence', 'Canard', 'Capitulate', 'Capricious', 'Certitude', 'Cherpsed', 'Chuffed', 'Clarion', 'Commutual', 'Comparative', 'Conceit', 'Confab', 'Congruous', 'Conjoint', 'Conjunct', 'Coquettish', 'Coterie', 'Couth', 'Crudités', 'Cynosure', 'Daub', 'Demarcation', 'Derisively', 'Dexterous', 'Discomfit', 'Dodecahedron', 'Du Jour', 'Elan', 'Elucidate', 'Emollient', 'Emoluments', 'En Passant', 'Enjoin', 'Ennui', 'Ensconced', 'Epigenetics', 'Epitaph', 'Expatriate', 'Expedient', 'Foibles', 'Garrulous', 'Gradation', 'Gyre', 'Halcyon', 'Hearten', 'Hummock', 'Impenitent', 'In Situ', 'Indelible', 'Indelibly', 'Indemnification', 'Indemnity', 'Inexorable', 'Ingénue', 'Insouciant', 'Interregnum', 'Interstitial', 'Intractable', 'Intransigent', 'Jaunty', 'Joie De Vivre', 'Jovial', 'Lampoon', 'Latently', 'Livery', 'Loquacious', 'Magnanimity', 'Malaise', 'Moiety', 'Monition', 'Morose', 'Mot Juste', 'Myopic', 'Nadir', 'Nascent', 'Née', 'Nonce', 'Nonchalant', 'Nonplus', 'Obdurate', 'Oeuvre', 'Omphalos', 'Onus', 'Ostracize', 'Pablum', 'Pallor', 'Panopticon', 'Patently', 'Patina', 'Patois', 'Paucity', 'Perdurable', 'Pervasive', 'Phalanx', 'Pilloried', 'Pique', 'Pontificate', 'Portend', 'Predominant', 'Preponderant', 'Pro Tem', 'Proffer', 'Profiteroles', 'Proletariat', 'Proliferation', 'Proscribe', 'Pundit', 'Quotidian', 'Recalcitrant', 'Redound', 'Refractory', 'Rustication', 'Salient', 'Simulacrum', 'Sinew', 'Soupcon', 'Specious', 'Strata', 'Stratum', 'Substantive', 'Superbolide', 'Superlative', 'Swarthy', 'Terse', 'Titter', 'Unremitting', 'Vanguard', 'Veracity', 'Vignette', 'Vogue'];
// const default_word_list: string[] = ['Admonition', 'Adroit', 'Amalgamate', 'Amenity', 'Anathema', 'Anima', 'Animus', 'Annealing', 'Antithesis', 'Aplomb', 'Appurtenant', 'Apropos', 'Arbitrage', 'Argot', 'Artifice', 'Assiduous', 'Assiduously', 'Atavistic', 'Austere', 'Auteur', 'Balaclava', 'Bastion', 'Bellicose', 'Betide', 'Bifurcate', 'Blasé', 'Blithe', 'Bolide', 'Bolster', 'Buoy', 'Buoyant'];
// const defaultWords: Array<Word> = default_word_list.sort().map((word, i) => (word_cache({
//     word: word,
//     id: i,
//     def: undefined,
//     favorite: false,
//     tags: undefined,
//     dict_def: undefined,
// })));

export const default_version: number = 1.1;
export const default_auto_defs: boolean = true;

export function new_word_cache(word: Word): WordCache {
    return {
        word: word.word.toLowerCase(),
        def: word.def?.toLowerCase(),
        dict_def: word.dict_def ? dictionaryCache(word.dict_def) : undefined,
        tags: word.tags?.map(t => '#' + t.toLowerCase()),
    };
}

export function word_cache(word: Word): Word {
    word.cache = new_word_cache(word);
    return word;
}

export function list_blank(key: string): WordList {
    let list = {
        "words": [],
        "next_id": 1,
        "sort_by": defaultSortBy,
        "sort_order": defaultSortOrder,
        "key": key.toLowerCase(),
        "version": default_version,
        "auto_defs": default_auto_defs,
    };
    return list;
}

export function list_default(key: string): WordList {
    let list = <WordList>default_list;
    list.sort_by = defaultSortBy;
    list.sort_order = defaultSortOrder;
    list.key = key.toLowerCase();
    list.next_id = list.words.length;
    return list;
}

export function list_get(key: string): WordList {
    const stored: string | null = (browser) ? localStorage.getItem(key.toLowerCase()) : null;

    if (stored) {
        let list = JSON.parse(stored);

        // check for upgrade to version 1.1
        if (!("version" in list)) {
            list.version = default_version;
            list.auto_defs = default_auto_defs;
            console.log(`upgrading ${key} to version 1.1`);
            list_save(list, key);
        }

        return list;
    } else {
        let list = list_default(key);
        list_save(list);

        return list;
    }
}

export function list_exists(key: string): boolean {
    return localStorage.getItem(key.toLowerCase()) !== null;
}

export function list_save(list: WordList, key: string | undefined = undefined) {
    if (browser) {
        if (!key) {
            key = list.key;
        }
        localStorage.setItem(key.toLowerCase(), JSON.stringify(list));
    }
}

export function list_add(list: WordList, word: Word): number {
    word_cache(word);
    word.id = list.next_id;
    list.next_id += 1;
    return list.words.push(word) - 1;
}

export function list_update(list: WordList, word: Word, fn: (list_word: Word, updated: Word) => boolean): boolean {
    const i = list.words.findIndex(w => w.id == word.id);
    return i >= 0 && fn(list.words[i], word);
}

export function list_update_word(list: WordList, id: number, word: string): boolean {
    const i = list.words.findIndex(w => w.id == id);
    if (i < 0) return false;

    list.words[i].word = word;
    list.words[i].cache = new_word_cache(list.words[i]);
    return true;
}

export function list_update_definition(list: WordList, id: number, def: string | undefined): boolean {
    const i = list.words.findIndex(w => w.id == id);
    if (i < 0) return false;

    list.words[i].def = def;
    list.words[i].cache = new_word_cache(list.words[i]);
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

export function list_sort(list: WordList): WordList {
    if (list.words && list.words.length > 1) {
        list.words.sort(sort_fn(list.sort_by, list.sort_order));
    }
    return list;
}

function sort_fn(sort_by: SortBy, sort_order: SortOrder, sort_favorites: boolean = true): (a: Word, b: Word) => number {
    let sort: (a: Word, b: Word) => number;

    switch (sort_by) {
        case SortBy.Id:
            if (sort_order == SortOrder.Asc) {
                sort = (a: Word, b: Word) => {
                    return a.id - b.id;
                };
            } else {
                sort = (a: Word, b: Word) => {
                    return b.id - a.id;
                };
            }
            break;
        case SortBy.Word:
            if (sort_order == SortOrder.Desc) {
                sort = (a: Word, b: Word) => {
                    return b.word.localeCompare(a.word);
                }
            } else {
                sort = (a: Word, b: Word) => {
                    return a.word.localeCompare(b.word);
                };
            }
            break;
    }

    const favs = (a: Word, b: Word): number => {
        // convert the sort_order boolean to -1 (false) or 1 (true)
        const m = Math.pow(-1, Number(sort_order === SortOrder.Asc));

        // rank favorited words higher than non-favorited words while sorting
        const f = (Number(a.favorite) - Number(b.favorite)) * m;
        return (f !== 0) ? f : sort(a, b);
    };

    return favs;
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

export function download_json(key: string): boolean {
    if (!browser) return false;
    const json = localStorage.getItem(key.toLowerCase());
    if (!json) return false;
    // https://stackoverflow.com/questions/19721439/download-json-object-as-a-file-from-browser
    const data = 'data:text/json;charset=utf-8,' + encodeURIComponent(json);
    let node = document.createElement('a');
    node.setAttribute('href', data);
    node.setAttribute('download', key.replaceAll(' ', '_') + '_' + cur_date() + '.json');
    document.body.appendChild(node);
    node.click();
    node.remove();
    return true;
}

export function getWordElem(key: string, id: number): HTMLElement | null {
    return document.getElementById(key + '-word-' + id);
}

