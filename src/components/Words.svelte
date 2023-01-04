<script lang="ts">
    import { browser } from '$app/environment';
    import Sort from './Sort.svelte';
    import Word from './Word.svelte';
    import Search from './Search.svelte';
    import type { Word as WordType, WordList, WordEvent, SortEvent, FilterEvent } from '../types';
    import {
        list_init,
        list_remove,
        list_save,
        list_sort,
        list_update,
        list_update_word,
        list_update_definition,
        filter_word,
        new_word_cache
    } from '../words';
    import { removeMarks } from '../events';
    import { scrollToWord } from '../utils';

    export let key: string = 'words';
    let list: WordList = list_init(key);
    list_sort(list);
    list = list;

    let search: string = '';
    let full_defs: string = '';
    $: phrases = search.split(' ');
    $: full_defs = search === '' ? '' : 'full-defs';

    let scrollTo: string | null;
    if (browser) scrollTo = new URLSearchParams(window.location.search).get('word');
    else scrollTo = null;

    if (scrollTo) {
        scrollToWord(parseInt(scrollTo), key);
    }

    function showAll() {
        list.words
            .filter((w) => filter_word(phrases, w))
            .forEach((w) => {
                const t = document.getElementById(`${key}-${w.id}`)?.querySelector('details');
                if (t) {
                    t.open = true;
                }
            });
    }
    function showNone() {
        list.words
            .filter((w) => filter_word(phrases, w))
            .forEach((w) => {
                const t = document.getElementById(`${key}-${w.id}`)?.querySelector('details');
                if (t) {
                    t.open = false;
                }
            });
    }

    function updateWord(e: WordEvent) {
        if (e.key != key) return;
        console.log('checking word update');
        if (list_update_word(list, e.word.id, e.word.word)) {
            list_sort(list);
            list_save(list);
            list = list;
            scrollToWord(e.word.id, key);
        } else {
            console.log('word update failed');
        }
    }

    function updateDefinition(e: WordEvent) {
        if (e.key != key || !e.word.def) return;
        let def = removeMarks(e.word.def.trim());
        if (list_update_definition(list, e.word.id, def)) {
            list_save(list);
        } else {
            console.log('definition update failed');
        }
    }

    function updateTags(e: WordEvent) {
        function updateWordTags(list_word: WordType, updated: WordType) {
            list_word.tags = updated.tags;
            list_word.cache = new_word_cache(list_word);
            return true;
        }

        if (e.key != key) return;
        list_update(list, e.word, updateWordTags);
        list_save(list);
    }

    function updateFavorite(e: WordEvent) {
        function updateWordFavorite(list_word: WordType, updated: WordType) {
            list_word.favorite = updated.favorite;
            return true;
        }
        console.log('updating favorite');

        if (e.key != key) return;
        list_update(list, e.word, updateWordFavorite);
        // list_sort(list);
        list_save(list);
        list = list;
    }

    function deleteWord(e: WordEvent) {
        if (e.key != key) return;
        if (list_remove(list, e.word.id)) {
            list_save(list);
            list = list;
        } else {
            console.log('remove word failed');
        }
    }

    function updateSort(e: SortEvent) {
        if (e.key != key) return;
        list.sort_by = e.sort_by;
        list.sort_order = e.sort_order;
        list_sort(list);
        list_save(list);
    }

    function updateFilter(e: FilterEvent) {
        if (e.key != key) return;
        search = e.search.toLocaleLowerCase();
    }
</script>

{#if list.words}
    <div class="sticky-search-bar list-group-item">
        <Search
            {key}
            on:updateFilter={(e) => {
                updateFilter(e.detail);
            }}
        />
        <div class="options-bar">
            <div class="show-hide">
                <button on:click={showAll}>Show</button>/<button on:click={showNone}>Hide</button>
            </div>
            <Sort
                {key}
                sort_by={list.sort_by}
                sort_order={list.sort_order}
                on:updateSort={(e) => updateSort(e.detail)}
            />
        </div>
    </div>

    <ul class="word-group {full_defs}">
        {#each list.words.filter((w) => filter_word(phrases, w)) as word}
            <Word
                {key}
                item={word}
                highlight={phrases}
                on:updateWord={(e) => updateWord(e.detail)}
                on:updateDefinition={(e) => updateDefinition(e.detail)}
                on:deleteWord={(e) => deleteWord(e.detail)}
                on:updateWordTags={(e) => updateTags(e.detail)}
                on:updateFavorite={(e) => updateFavorite(e.detail)}
            />
        {:else}
            <p>No matching words</p>
        {/each}
    </ul>
{:else}
    <p>No words have been added yet</p>
{/if}

<style>
    .show-hide {
        font-size: 90%;
        align-self: center;
    }
    .options-bar {
        display: flex;
        justify-content: space-between;
        margin-top: 15px;
        padding: 0.5rem 1.2rem 0.3rem 1.2rem;
        background: #f1f2f7;
        border-radius: 0.375rem;
    }

    .word-group {
        width: 100%;
        padding: 0.5rem 1.25rem;
    }

    .sticky-search-bar {
        background: white;
        border: 0px;
        padding: 1rem 0rem 0.4rem 0rem;
        position: sticky;
        margin-top: 1rem;
        z-index: 99;
    }

    button {
        /* border-radius: 0.375rem; */
        /* border: 1px solid #b9bfc5; */
        border: 0px;
        background: transparent;
    }
</style>
