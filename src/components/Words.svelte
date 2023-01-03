<script lang="ts">
    import { browser } from '$app/environment';
    import { tick } from 'svelte';
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
        filter_word
    } from '../words';
    import { removeMarks } from '../events';
    import { scrollToWord } from '../utils';

    export let key: string = 'words';
    let list: WordList = list_init(key);
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
                const t = document.getElementById(`${key}-${w.id}`);
                if (t && t.classList.contains('more')) {
                    t.classList.add('full-defs');
                }
            });
    }
    function showNone() {
        list.words
            .filter((w) => filter_word(phrases, w))
            .forEach((w) => {
                const t = document.getElementById(`${key}-${w.id}`);
                if (t && t.classList.contains('more')) {
                    t.classList.remove('full-defs');
                }
            });
    }

    function updateWord(e: WordEvent) {
        if (e.key != key) return;
        console.log('checking word update');
        if (list_update(list, e.word.id, e.word.word)) {
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
        if (list_update(list, e.word.id, undefined, def)) {
            list_save(list);
        } else {
            console.log('definition update failed');
        }
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
            <Sort
                {key}
                sort_by={list.sort_by}
                sort_order={list.sort_order}
                on:updateSort={(e) => updateSort(e.detail)}
            />
            <div class="show-hide">
                <button on:click={showAll}>Show</button>/<button on:click={showNone}>Hide</button>
            </div>
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
            />
        {:else}
            <p>No matching words</p>
        {/each}
    </ul>
{:else}
    <p>No words have been added yet</p>
{/if}

<style>
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
        top: 0px;
        z-index: 99;
    }

    button {
        /* border-radius: 0.375rem; */
        /* border: 1px solid #b9bfc5; */
        border: 0px;
        background: transparent;
    }
</style>
