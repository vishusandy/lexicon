// import type { DictionaryWord, DictionaryEntryDefintion, DictionaryAudio } from './types';

export type DictionaryEntryDefintion = {
    definition: string,
    part: string,
    synonyms: string[],
    antonyms: string[],
};

export type DictionaryAudio = {
    phonetics: string,
    url: string,
};

export type DictionaryWord = {
    word: string,
    parts: DictionaryEntryDefintion[],
    audio: DictionaryAudio[],
};

export function dictionaryCache(dict: DictionaryWord): string {
    return dict.word.toLowerCase() + dict.parts.map((p) => {
        p.definition.toLowerCase() + ' ' + p.synonyms.join(' ').toLowerCase() + ' ' + p.antonyms.join(' ').toLowerCase()
    });
}


type APIEntry = {
    lookup: (word: string) => Promise<DictionaryWord | null>;
};

const free_dict: APIEntry = {
    lookup: (word: string) => getDictionaryDef(dictionaryAPIUrl(word), dictionaryApiJsonDef),
}

export const APIProviders = {
    free_dict,
};


async function getDictionaryDef(url: string, def_fn: (json: any) => DictionaryWord | null): Promise<DictionaryWord | null> {
    const resp = await fetch(url);
    if (!resp.ok) {
        console.log('Invalid url response');
        console.log(resp);
        return null
    };
    const json = await resp.json();

    console.log('received json');
    console.log(json);

    return def_fn(json);
}

const dict_api_url: string = "https://api.dictionaryapi.dev/api/v2/entries/en/";

function dictionaryAPIUrl(word: string): string {
    return `${dict_api_url}${word}`;
}

function dictionaryApiJsonDef(json_array: any): DictionaryWord | null {
    const json = json_array[0];

    console.log('checking for word');

    if (!json.word) return null;
    let word: string = json.word;

    console.log('checking for meanings');
    if (!json.meanings || !Array.isArray(json.meanings)) return null;

    console.log('proceeding');
    function getEntries(json: any): DictionaryEntryDefintion[] {
        let entries: DictionaryEntryDefintion[] = [];

        json.meanings.forEach((meaning: any) => {
            if (!meaning.partOfSpeech) return;
            const part: string = meaning.partOfSpeech;

            console.log(`part of speech: ${part}`);

            if (Array.isArray(meaning.definitions)) {
                console.log(`processing meaning definitions`);
                meaning.definitions.forEach((def: any) => {
                    if (!def.definition) return;
                    const entry: DictionaryEntryDefintion = {
                        definition: def.definition,
                        part,
                        synonyms: (def.synonyms && Array.isArray(def.synonyms)) ? def.synonyms : [],
                        antonyms: (def.antonyms && Array.isArray(def.antonyms)) ? def.antonyms : [],
                    };
                    entries.push(entry);
                });
            }
        });

        return entries;
    }

    function getAudio(json: any): DictionaryAudio[] {
        let audio: DictionaryAudio[] = [];

        if (json.phonetics && Array.isArray(json.phonetics)) {
            json.phonetics.forEach((p: any) => {
                if (p.audio) {
                    const a: DictionaryAudio = {
                        phonetics: (p.text) ? p.text : '',
                        url: p.audio,
                    };
                    audio.push(a);
                }
            });
        }

        return audio;
    }

    return {
        word,
        parts: getEntries(json),
        audio: getAudio(json),
    };
}




