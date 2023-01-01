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
        filter_word,
        scrollToWord
    } from '../words';
    import { removeMarks } from '../utils';

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
        scroll(parseInt(scrollTo), key);
    }

    async function scroll(id: number, key: string) {
        if (!Number.isNaN(id)) {
            await tick();
            scrollToWord(key, id);
        }
    }

    function updateWord(e: WordEvent) {
        if (e.key != key) return;
        console.log('checking word update');
        if (list_update(list, e.word.id, e.word.word)) {
            list_sort(list);
            list_save(list);
            list = list;
            scroll(e.word.id, key);
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
        <Sort
            {key}
            sort_by={list.sort_by}
            sort_order={list.sort_order}
            on:updateSort={(e) => updateSort(e.detail)}
        />
    </div>

    <ul class="word-group list-group {full_defs}">
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
    .word-group {
        margin: 0rem;
        width: 100%;
        height: 100%;
        border-radius: 0px;
        /* overflow: scroll; */
    }

    .sort-bar {
        /* text-align: right; */
    }

    .sticky-search-bar {
        background: white;
        display: flex;
        /* align-content: stretch; */
        align-items: center;
        border: 0px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.125);
        padding: 1rem 0rem 0.9rem 0rem;
        position: sticky;
        /* text-align: center; */
        top: 0px;
        z-index: 99;
    }
</style>
