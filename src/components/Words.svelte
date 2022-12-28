<script lang="ts">
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

    export let key: string = 'words';
    let list: WordList = list_init(key);
    let search: string = '';
    $: phrases = search.split(' ');

    const scrollTo: string | null = new URLSearchParams(window.location.search).get('word');

    if (scrollTo) {
        scroll(parseInt(scrollTo), key);
    }

    function scroll(id: number, key: string) {
        if (!Number.isNaN(id)) {
            setTimeout(() => {
                scrollToWord(key, id);
            }, 700);
        }
    }

    function updateWord(e: WordEvent) {
        if (e.key != key) return;
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
        let def = e.word.def.trim();
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

<Search
    {key}
    on:updateFilter={(e) => {
        updateFilter(e.detail);
    }}
/>

{#if list.words}
    <ul>
        {#each list.words.filter((w) => filter_word(phrases, w)) as word}
            <Word
                {key}
                item={word}
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

<Sort
    {key}
    sort_by={list.sort_by}
    sort_order={list.sort_order}
    on:updateSort={(e) => updateSort(e.detail)}
/>
