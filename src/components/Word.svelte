<script lang="ts">
    import { enterPressed } from '../events';
    import { createEventDispatcher, afterUpdate, onMount } from 'svelte';
    import { browser } from '$app/environment';
    import type { Word } from '../types';
    import { addMarks, removeMarks } from '../utils';
    import DictDef from './DictDef.svelte';
    import type { DictionaryWord } from 'src/dictionary';
    import Tags from './Tags.svelte';
    import Audio from './Audio.svelte';
    import { getWordElem } from '../words';

    const dispatch = createEventDispatcher();

    export let key: string;
    export let item: Word;
    export let highlight: string[];

    let dict_def: DictionaryWord | undefined = item.dict_def;
    $: dict_def = highlightDefinition(item.dict_def);

    function highlightDefinition(def: DictionaryWord | undefined): DictionaryWord | undefined {
        if (!def) return;
        let d = { ...def };
        for (let part of d.parts) {
            part.definition = addMarks(removeMarks(part.definition), highlight);
            part.part = addMarks(removeMarks(part.part), highlight);
        }
        return d;
    }

    function defId(): string {
        return key + '-def-' + item.id;
    }

    function getLiElem(): HTMLElement | null {
        return document.getElementById(`${key}-${item.id}`);
    }

    function getDefElem(): HTMLElement | null {
        return document.getElementById(defId());
    }

    onMount(() => {
        const t = getWordElem(key, item.id);
        if (!t) return;
        updateTitle(t);
    });

    // afterUpdate(() => {
    // const w = getWordElem(key, item.id);
    // const d = getDefElem();
    // if (w) {
    //     w.innerHTML = item.word;
    // }
    // if (d && item.def) {
    //     d.innerHTML = item.def;
    // }
    // addHighlights();
    // });

    function updateWord() {
        const t = getWordElem(key, item.id);
        if (!t) return;
        item.word = t.innerHTML;
        // t.innerHTML = '';

        if (item.word == '') {
            if (!deleteWord(item)) {
                item.word = t.title;
            }
            return;
        }

        if (t.title != item.word) {
            // updateTitle(t);
            dispatch('updateWord', { word: item, key });
        }
    }

    function updateDefinition() {
        // item.def = item.def?.replaceAll('<br>', '');
        // item.def =
        const t = getDefElem();
        if (t) {
            item.def = t.innerHTML.replaceAll('<br>', '');
            // t.innerHTML = t.innerHTML.replaceAll('<br>', '');
        }
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
        // console.log('updating title to %s', item.word);
        dfn.title = item.word;
    }

    function updateTags() {
        dispatch('updateWordTags', { word: item, key });
    }

    function updateFavorite() {
        dispatch('updateFavorite', { word: item, key });
    }

    function addHighlights() {
        removeHighlights();
        if (highlight.length === 0) return;
        const def = getDefElem();
        const li = getLiElem();
        const w = getWordElem(key, item.id);

        if (w) {
            w.innerHTML = addMarks(item.word, highlight);
        }

        if (def && item.def) {
            def.innerHTML = addMarks(item.def, highlight);
        }

        if (li) {
            li.querySelectorAll('.pos, .def, .syn, .ant').forEach(
                (node) => (node.innerHTML = addMarks(node.innerHTML, highlight))
            );

            li.querySelectorAll('.tag').forEach((node) => {
                if (highlight.some((f) => f == '#' + node.innerHTML.toLowerCase())) {
                    node.parentElement?.classList.add('highlight-tag');
                }
            });
        }
    }

    function removeHighlights() {
        const def = getDefElem();
        const li = getLiElem();
        const w = getWordElem(key, item.id);

        if (w) {
            w.innerHTML = removeMarks(w.innerHTML);
        }

        if (def) {
            def.innerHTML = removeMarks(def.innerHTML);
        }

        if (li) {
            li.querySelectorAll('.pos, .def, .syn, .ant').forEach(
                (node) => (node.innerHTML = removeMarks(node.innerHTML))
            );
        }
    }

    function refreshWord() {
        const t = getLiElem()?.querySelector('details');
        if (t) {
            t.open = true;
        }
        dispatch('refreshWord', { word: item, key });
    }

    function handleWordKeyPress(e: KeyboardEvent) {
        const t = <HTMLInputElement | null>e.target;
        if (e.code == 'Escape' && t) {
            t.innerHTML = t.title;
            t.blur();
            return;
        }
        enterPressed(e);
    }
</script>

<hr id="{key}-hr-{item.id}" />
<li id="{key}-{item.id}" class="word-item">
    <input class="select-word" type="checkbox" data-id={item.id} />
    <button class="remove-word-btn remove-btn" on:click={() => deleteWord(item)}>
        <i class="fa-solid fa-xmark" />
    </button>
    <button class="refresh-btn" on:click={refreshWord} title="Refresh defintion">
        <i class="fa-solid fa-arrows-rotate" />
    </button>
    <input
        id="{key}-fav-{item.id}"
        bind:checked={item.favorite}
        title="Favorite"
        class="fav-checkbox"
        type="checkbox"
        on:change={updateFavorite}
    />
    <label for="{key}-fav-{item.id}" class="fav-label" />
    <details open={Array.isArray(highlight) && highlight.length > 0}>
        <summary>
            <dfn
                id="{key}-word-{item.id}"
                class="word"
                contenteditable="true"
                on:blur={() => updateWord()}
                on:keydown={handleWordKeyPress}
                on:click={(e) => {
                    e.preventDefault();
                }}
            >
                {item.word}
            </dfn>
            <div class="detail-arrow" />
        </summary>
        <div class="detail-content">
            {#if item.dict_def && item.dict_def.audio.length > 0}
                <div class="audio-entries">
                    {#each item.dict_def.audio as audio}
                        <Audio src={audio.url} title={audio.phonetics} />
                    {/each}
                </div>
            {/if}

            {#if dict_def}
                <DictDef dict={dict_def} />
            {/if}
            <span class="def-label">Notes:</span>
            <div
                id="{key}-def-{item.id}"
                class="word-definition"
                contenteditable="true"
                on:keydown={enterPressed}
                on:blur={() => {
                    updateDefinition();
                    addHighlights();
                }}
                on:focus={() => removeHighlights()}
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
    .audio-entries {
        text-indent: 0.5rem;
        margin-top: 0.5rem;
    }

    .select-word {
        margin-left: 0.5rem;
        margin-right: 0.25rem;
    }

    .remove-word-btn {
        /* color: #b34f4f;
        background: transparent;
        border: 0px; */
        padding-top: 0.1rem;
    }

    .refresh-btn {
        background-color: transparent;
        border: 0px;
        margin: 0.1rem 0px 0px 0.05rem;
        font-size: 0.95rem;
        color: #666;
    }

    .fav-checkbox {
        position: relative;
        opacity: 0;
    }

    .fav-label {
        /* color: #686a6e; */
        color: #666;
        font-family: 'Font Awesome 6 Free';
        font-size: 0.9rem;
        padding: 0.2rem 0.3rem 0.2rem;
        margin-right: 0.2rem;
        margin-left: -1rem;
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
        /* color: #ecd609; */
        color: #eec009;
        content: '\f005';
        font-weight: 900;
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
        margin-left: 0.3rem;
        display: flex;
    }

    .word-item {
        /* border: 1px solid transparent; */
        border-radius: 0.75rem;
        width: 100%;
        margin: 0.2rem auto;
        padding: 0.5rem 0rem 0.5rem 0rem;
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

    li:first-of-type {
        border-top-width: 0px;
    }

    li {
        display: flex;
        align-items: baseline;
        margin-bottom: 4rem;
        list-style-type: none;
        transition: background-color 1.5s ease-in-out, box-shadow 1.5s ease-in;
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
