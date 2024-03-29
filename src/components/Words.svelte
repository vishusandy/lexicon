<script lang="ts">
    import { browser } from '$app/environment';
    import Sort from './Sort.svelte';
    import Word from './Word.svelte';
    import Search from './Search.svelte';
    import Alert from './Alert.svelte';
    import { APIProviders } from '../dictionary';
    import type { Word as WordType, WordList, WordEvent, SortEvent, FilterEvent } from '../types';
    import {
        list_get,
        list_remove,
        list_save,
        list_sort,
        list_update,
        list_update_word,
        list_update_note,
        filter_word,
        new_word_cache,
        getWordElem
    } from '../words';
    import { scrollToWord, removeMarks } from '../utils';
    import { tick } from 'svelte';

    export let key: string = 'words';
    let list: WordList = list_get(key);
    list = list_sort(list);

    let check_all: boolean = false;

    let search: string = '';
    let full_defs: string = '';
    $: phrases = search.split(' ').filter((f) => f.length > 0);
    $: full_defs = search === '' ? '' : 'full-defs';
    let filtered: WordType[];
    $: filtered = list.words.filter((w) => filter_word(phrases, w));

    let alert: string | undefined = undefined;

    let scrollTo: string | null;
    if (browser) scrollTo = new URLSearchParams(window.location.search).get('word');
    else scrollTo = null;

    if (scrollTo) {
        scrollToWord(parseInt(scrollTo), key);
    }

    function count_checked(): number {
        const boxes = <NodeListOf<HTMLInputElement>>(
            document.querySelectorAll('input[type="checkbox"].select-word')
        );
        return editAction((node) => true);
    }

    function selectAll() {
        let checked = count_checked() === 0;
        const boxes = <NodeListOf<HTMLInputElement>>(
            document.querySelectorAll('input[type="checkbox"].select-word')
        );
        if (!boxes) return 0;
        console.log('selecting with action=%i', checked);
        let c: number = 0;
        boxes.forEach((node) => {
            node.checked = checked;
            c += 1;
        });
        if (c !== 0) {
            check_all = checked;
        }
    }

    function editAction(fn: (node: HTMLInputElement) => boolean): number {
        const boxes = <NodeListOf<HTMLInputElement>>(
            document.querySelectorAll('input[type="checkbox"].select-word')
        );
        if (!boxes) return 0;
        let c: number = 0;
        boxes.forEach((node) => {
            if (node.checked && fn(node)) {
                c += 1;
            }
        });
        return c;
    }

    async function actionDelete() {
        const count = count_checked();
        if (!browser || count === 0) return false;
        if (!window.confirm(count === 1 ? 'Delete word?' : `Delete ${count} words?`)) {
            return false;
        }
        const deleted = editAction((node) => {
            if (node.dataset.id) {
                const n = Number(node.dataset.id);
                if (!Number.isNaN(n)) {
                    if (list_remove(list, n)) {
                        const p = node.parentElement;
                        if (p) {
                            p.parentElement?.removeChild(p);
                        }
                        const hr = document.getElementById(`${key}-hr-${n}`);
                        if (hr) {
                            hr.parentElement?.removeChild(hr);
                        } else {
                        }
                        return true;
                    } else {
                        console.log(`delete for ${n} failed`);
                    }
                }
            }
            return false;
        });
        await tick();
        if (deleted > 0) {
            list_save(list);
            list = list;
        }
        return true;
    }

    function actionShowAll() {
        if (count_checked() === 0) {
            // list.words
            //     .filter((w) => filter_word(phrases, w))
            filtered.forEach((w) => {
                const t = document.getElementById(`${key}-${w.id}`)?.querySelector('details');
                if (t) {
                    t.open = true;
                }
            });
        } else {
            editAction((node) => {
                const t = node.parentElement?.querySelector('details');
                if (t) {
                    t.open = true;
                    return true;
                }
                return false;
            });
        }
    }

    function actionShowNone() {
        if (count_checked() === 0) {
            // list.words
            //     .filter((w) => filter_word(phrases, w))
            filtered.forEach((w) => {
                const t = document.getElementById(`${key}-${w.id}`)?.querySelector('details');
                if (t) {
                    t.open = false;
                }
            });
        } else {
            editAction((node) => {
                const t = node.parentElement?.querySelector('details');
                if (t) {
                    t.open = false;
                    return true;
                }
                return false;
            });
        }
    }

    function updateWord(e: WordEvent) {
        console.log(e);
        if (e.key != key || !e.word || !e.word.word) return;
        let lower = e.word.word.trim().toLowerCase();
        let dup = list.words.find((w) => w.cache?.word === lower);
        let original = list.words.find((w) => w.id === e.word.id);
        let t = getWordElem(key, e.word.id);
        if (original != undefined && dup != undefined) {
            console.log('original: %o\ndup: %o', original, dup);
            console.log('duplicate word');
            if (t) {
                console.log('resetting to ' + t.title);
                t.innerHTML = t.title;
                original.word = t.title;
            }
        } else if (list_update_word(list, e.word.id, e.word.word)) {
            list = list_sort(list);
            if (t) {
                // console.log('updating title');
                t.title = e.word.word;
            }
            console.log('updated list: %o', list.words);
            list_save(list);
            list = list;
            scrollToWord(e.word.id, key);
        } else {
            console.log('word update failed: %o', e.word);
        }
    }

    function updateDefinition(e: WordEvent) {
        if (e.key != key || !e.word.def) return;
        let def = removeMarks(e.word.def.trim());
        if (list_update_note(list, e.word.id, def)) {
            list_save(list);
        } else {
            console.log('definition update failed');
        }
    }

    function updateTags(e: WordEvent) {
        function updateWordTags(list_word: WordType, updated: WordType) {
            list_word.tags = [...new Set(updated.tags)];
            list_word.cache = new_word_cache(list_word);
            return true;
        }

        if (e.key != key) return;
        list_update(list, e.word, updateWordTags);
        list_save(list);
        list = list;
    }

    function updateFavorite(e: WordEvent) {
        function updateWordFavorite(list_word: WordType, updated: WordType) {
            list_word.favorite = updated.favorite;
            return true;
        }

        if (e.key != key) return;
        list_update(list, e.word, updateWordFavorite);
        // intentionally not calling list_sort() because it will rearrange the order of items
        // while the user is still marking favorites
        list_save(list);
        list = list;
    }

    function refreshWord(e: WordEvent) {
        function refreshWordUpdate(list_word: WordType, updated: WordType) {
            list_word.dict_def = updated.dict_def;
            return true;
        }

        if (e.key != key) return;
        APIProviders.default
            .lookup(e.word.word)
            .then((data) => {
                if (data) {
                    e.word.dict_def = data;
                } else {
                    alert = `'${e.word.word}' has no dictionary definition`;
                }
            })
            .finally(() => {
                e.word.cache = new_word_cache(e.word);
                list_update(list, e.word, refreshWordUpdate);
                list_save(list);
                list = list;
            });
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
        search = e.search.toLowerCase();
    }
</script>

<div class="sticky-search-bar list-group-item">
    <div class="sticky-container">
        <Search
            {key}
            on:updateFilter={(e) => {
                updateFilter(e.detail);
            }}
        />
        <div class="options-bar">
            <div class="show-hide">
                <div class="select-options">
                    <input
                        type="checkbox"
                        class="select-checkbox"
                        bind:checked={check_all}
                        on:change={selectAll}
                    />
                    <button on:click={actionShowAll} class="show-btn" title="Show selected" />
                    <button on:click={actionShowNone} class="hide-btn" title="Hide selected" />
                    <button on:click={actionDelete} class="del-btn" title="Delete selected" />
                </div>
            </div>
            <Sort
                {key}
                sort_by={list.sort_by}
                sort_order={list.sort_order}
                on:updateSort={(e) => updateSort(e.detail)}
            />
        </div>
        {#if search != ''}
            <div class="filter-count">
                Showing <b>{filtered.length}</b> out of <b>{list.words.length}</b> words
            </div>
        {/if}
    </div>
    <div class="sticky-fade" />
</div>

<ul class="word-group {full_defs}">
    <!-- {#each list.words.filter((w) => filter_word(phrases, w)) as word (word.id)} -->
    {#each filtered as word (word.id)}
        <Word
            {key}
            item={word}
            highlight={phrases}
            on:updateWord={(e) => updateWord(e.detail)}
            on:updateDefinition={(e) => updateDefinition(e.detail)}
            on:deleteWord={(e) => deleteWord(e.detail)}
            on:updateWordTags={(e) => updateTags(e.detail)}
            on:updateFavorite={(e) => updateFavorite(e.detail)}
            on:refreshWord={(e) => refreshWord(e.detail)}
        />
    {:else}
        {#if search}
            <p>No matching words</p>
        {:else}
            <p>No words have been added</p>
        {/if}
    {/each}
</ul>

{#if alert}
    <Alert bind:message={alert} />
{/if}

<style>
    .filter-count {
        margin: 0.3rem 0px 0rem;
        text-align: center;
        font-size: 0.95rem;
    }

    .del-btn::before {
        color: #ca4c3b;
        content: '\f00d';
        font-family: 'Font Awesome 6 Free';
        font-weight: 900;
        font-size: 1.2rem;
    }

    .select-checkbox {
        margin-right: 0.4rem;
        cursor: pointer;
    }

    .show-btn::before {
        content: '\f06e';
        font-family: 'Font Awesome 6 Free';
        color: #c4c4c4;
    }

    .hide-btn {
        margin-right: 0.3rem;
    }

    .hide-btn::before {
        color: #b1b0b0;
        content: '\f070';
        font-family: 'Font Awesome 6 Free';
    }

    .select-options {
        display: flex;
        margin-right: 0.5rem;
        margin-left: 0.2rem;
        /* gap: 0.1em; */
    }

    .select-words {
        display: inline-block;
        width: fit-content;
        margin-right: 0.5rem;
    }

    .show-hide {
        font-size: 95%;
        align-self: center;
    }

    .options-bar {
        display: flex;
        justify-content: space-between;
        margin-top: 15px;
        padding: 0.7rem 1.2rem 0.7rem 1.2rem;
        /* background: #f1f2f7; */
        background: #34353a;
        color: #c92672;
        border-radius: 1rem;
    }

    .word-group {
        width: 100%;
        padding: 0.5rem 1.25rem 0.5rem 1.25rem;
    }

    .sticky-container {
        padding-top: 2rem;
        background: rgb(255, 255, 255);
    }

    .sticky-search-bar {
        border: 0px;
        padding: 0rem 0rem 0.4rem 0rem;
        position: sticky;
        margin-top: -1rem;
        z-index: 99;
    }

    .sticky-fade {
        height: 0.7rem;
        background: rgb(255, 255, 255);
        background: linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
    }

    button {
        border: 0px;
        background: transparent;
        padding: 0px 0.25rem;
    }
</style>
