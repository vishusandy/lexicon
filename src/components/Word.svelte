<script lang="ts">
    import { enterPressed } from '../events';
    import { createEventDispatcher } from 'svelte';
    import { afterUpdate, onMount } from 'svelte';
    import { browser } from '$app/environment';
    import type { Word } from '../types';
    import { removeMarks } from '../events';
    import DictDef from './DictDef.svelte';
    import Tags from './Tags.svelte';

    const dispatch = createEventDispatcher();

    export let key: string;
    export let item: Word;
    export let highlight: string[];

    function getWordElem(): HTMLElement | null {
        return document.getElementById(key + '-word-' + item.id);
    }

    function getLiElem(): HTMLElement | null {
        return document.getElementById(`${key}-${item.id}`);
    }

    function defId(): string {
        return key + '-def-' + item.id;
    }

    onMount(() => {
        const t = getWordElem();
        if (!t) return;
        updateTitle(t);
    });

    afterUpdate(() => {
        addHighlights(defId());
    });

    function updateWord(word: Word) {
        const t = getWordElem();
        if (word.word == '') {
            if (!deleteWord(word)) {
                if (t) item.word = t.title;
            }
            return;
        }

        if (!t) {
            dispatch('updateWord', { word, key });
        } else if (t.title != word.word) {
            updateTitle(t);
            dispatch('updateWord', { word, key });
        }
    }

    function updateDefinition() {
        item.def = item.def?.replaceAll('<br>', '');
        dispatch('updateDefinition', { word: item, key });
    }

    function deleteWord(word: Word): boolean | undefined {
        if (!browser) return undefined;
        if (!window.confirm('Delete word?')) {
            return false;
        }
        dispatch('deleteWord', { word, key });
        return true;
    }

    function updateTitle(dfn: HTMLElement) {
        dfn.title = item.word;
    }

    function updateTags() {
        dispatch('updateWordTags', { word: item, key });
    }

    function updateFavorite() {
        dispatch('updateFavorite', { word: item, key });
    }

    function addHighlights(id: string) {
        const t = document.getElementById(id);
        if (!t || !highlight || highlight.length === 0) return;
        for (let i = 0; i < highlight.length; i++) {
            const s = highlight[i];
            if (s == '') continue;
            const re = new RegExp(`(${s})`, 'gi');
            console.log(`replacing '${s}'`);
            t.innerHTML = t.innerHTML.replace(re, '<mark>$1</mark>');
        }
    }

    function removeHighlights(id: string) {
        const t = document.getElementById(id);
        if (!t) return;
        t.innerHTML = removeMarks(t.innerHTML);
    }
</script>

<hr />
<li id="{key}-{item.id}" class="word-item">
    <button class="remove-word-btn" on:click={() => deleteWord(item)}>
        <i class="fa-solid fa-xmark" />
    </button>
    <details open={Array.isArray(highlight) && highlight.length > 0}>
        <summary>
            <input
                id="{key}-fav-{item.id}"
                bind:checked={item.favorite}
                title="Favorite"
                class="fav-checkbox"
                type="checkbox"
                on:change={updateFavorite}
            />
            <label for="{key}-fav-{item.id}" class="fav-label" />
            <dfn
                id="{key}-word-{item.id}"
                class="word"
                contenteditable="true"
                on:blur={() => updateWord(item)}
                on:keydown={enterPressed}
                bind:innerHTML={item.word}
                on:click={(e) => {
                    e.preventDefault();
                }}
            >
                {item.word}
            </dfn>
            <div class="detail-arrow" />
        </summary>
        <div class="detail-content">
            {#if item.dict_def}
                <DictDef {key} dict={item.dict_def} />
            {/if}
            <span class="def-label">Notes:</span>
            <div
                id="{key}-def-{item.id}"
                class="word-definition"
                contenteditable="true"
                bind:innerHTML={item.def}
                on:keydown={enterPressed}
                on:blur={() => {
                    updateDefinition();
                    addHighlights(defId());
                }}
                on:focus={() => removeHighlights(defId())}
            >
                {#if item.def}{item.def}{/if}
            </div>
            <div class="tag-list">
                <span class="tags-label">Tags:</span>
                <Tags {key} bind:tags={item.tags} on:updateTags={updateTags} />
            </div>
        </div>
    </details>
</li>

<style>
    .fav-checkbox {
        position: relative;
        opacity: 0;
    }

    .fav-label {
        color: #686a6e;
        font-family: 'Font Awesome 6 Free';
        font-size: 0.85rem;
        padding: 0.2rem 0.3rem;
        transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    }

    .fav-checkbox:focus + .fav-label {
        outline: 0;
        border-color: #86b7fe;
        box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
    }

    .fav-checkbox + .fav-label::after {
        content: '\f005';
        font-weight: 400;
    }

    .fav-checkbox[type='checkbox']:checked + .fav-label::after {
        color: #ecd609;
        content: '\f005';
        font-weight: 900;
    }

    .star::after {
        content: '\f005';
        font-weight: 400;
    }

    .tags-label {
        margin-right: 0.5rem;
    }

    .tag-list {
        display: flex;
        justify-content: flex-end;
        align-items: baseline;
    }

    .word-definition[contenteditable]:empty:not(:focus):before {
        content: 'notes';
        color: #616568;
        cursor: text;
    }

    .detail-arrow {
        display: inline-block;
        margin-left: auto;
    }

    .def-label {
        float: left;
        margin-right: 0.5rem;
    }

    .detail-content {
        margin-top: 0rem;
        margin-right: 2rem;
    }

    details .detail-arrow::after {
        font-family: 'Font Awesome 6 Free';

        color: #9ca0a3;
        font-weight: 600;
        content: '\f078';
    }
    details[open] .detail-arrow::after {
        content: '\f077';
    }

    details {
        /* display: inline-block; */
        width: 100%;
    }

    details summary {
        list-style-type: none;
        margin-left: 0.5rem;
        display: flex;
    }

    .word-item {
        /* background: #f4f4f7;
        background: #f5f5f8;
        border-radius: 0.375rem; */
        width: 100%;
        margin: 0.2rem auto;
        /* overflow: hidden; */
        /* height: 2.5rem; */
        border-left: 0px;
        border-right: 0px;
        padding: 0.5rem 1rem;
        word-wrap: break-word;
    }

    .word {
        color: #171a1d;
        cursor: text;
    }

    .word-definition {
        display: block;
        margin: 0px 0px 0px 0.2rem;
        color: #495057;
        width: 100%;
    }

    .highlight {
        background: yellow;
    }

    li:first-of-type {
        border-top-width: 0px;
    }

    li {
        display: flex;
        align-items: flex-start;
        margin-bottom: 4rem;
        list-style-type: none;
        transition: background-color 1.5s ease-in-out;
    }

    .remove-word-btn {
        color: rgb(210, 141, 141);
        background: transparent;
        border: 0px;
    }

    hr {
        margin: 0px auto;
        height: 1px;
        border: 0px;
        width: 90%;
        background: rgb(247, 244, 239);
        background: linear-gradient(
            90deg,
            rgba(247, 244, 239, 1) 0%,
            rgba(139, 134, 123, 1) 25%,
            rgba(117, 113, 104, 1) 50%,
            rgba(139, 134, 123, 1) 75%,
            rgba(247, 244, 239, 1) 100%
        );
    }

    hr:first-of-type {
        display: none;
    }

    /* .has-definition .word-definition::before {
        content: '-';
        color: #6c757d;
        margin-right: 0.3rem;
    } */

    /* li:not(.has-definition) .word::after {
        content: '       \200C';
    } */

    /* .word-item:focus-within,
    .full-defs {
        padding-bottom: calc(0.5rem - 3px);
    } */

    /* .word-item:focus-within,
    .full-defs {
        overflow: auto;
        height: unset;
        min-height: 2rem;
    } */

    /* .more-btn,
    .less-btn {
        margin-left: 0.5rem;
        color: #82858a;
    } */

    /* .more-btn {
        display: none;
    } */

    /* .less-btn {
        display: none;
    } */

    /* .word-item.more.full-defs .less-btn,
    .word-item.more:focus-within .less-btn {
        display: block;
        float: right;
        padding-right: 0px;
    } */

    /* .word-item:not(:focus-within):not(.full-defs).more .more-btn {
        display: block;
        float: right;
        padding-right: 0px;
    } */
</style>
