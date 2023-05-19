<script lang="ts">
    import { enterPressed } from '../events';
    import { createEventDispatcher, onMount, afterUpdate } from 'svelte';
    import { browser } from '$app/environment';
    import type { Word } from '../types';
    import { addMarks, adjustTextarea, removeMarks } from '../utils';
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
    $: dict_def = highlightDefinition(highlight, item.dict_def);

    afterUpdate(() => {
        const w = getWordElem(key, item.id);
        const d = getDefElem();
        if (w) {
            w.innerHTML = item.word;
        }
        if (d && item.def) {
            d.innerHTML = item.def;
        }
        addHighlights();
    });
    function addHighlights() {
        removeHighlights();
        if (highlight.length === 0) return;
        const li = getLiElem();
        const w = getWordElem(key, item.id);

        if (w) {
            w.innerHTML = addMarks(item.word, highlight);
        }

        if (li) {
            li.querySelectorAll('.pos, .def, .syn, .ant').forEach(
                (node) => (node.innerHTML = addMarks(node.innerHTML, highlight))
            );

            li.querySelectorAll('dt').forEach((node) => {
                node.innerHTML = addMarks(node.innerHTML, highlight);
            });
            li.querySelectorAll('.tag').forEach((node) => {
                if (highlight.some((f) => f == '#' + node.innerHTML.toLowerCase())) {
                    node.parentElement?.classList.add('highlight-tag');
                }
            });
        }
    }

    function removeHighlights() {
        const li = getLiElem();
        const w = getWordElem(key, item.id);

        if (w) {
            w.innerHTML = removeMarks(w.innerHTML);
        }

        if (li) {
            li.querySelectorAll('.pos, .def, .syn, .ant').forEach(
                (node) => (node.innerHTML = removeMarks(node.innerHTML))
            );
            li.querySelectorAll('dt').forEach((node) => {
                node.innerHTML = removeMarks(node.innerHTML);
            });
            li.querySelectorAll('.tag').forEach((node) => {
                node.parentElement?.classList.remove('highlight-tag');
            });
        }
    }

    function highlightDefinition(
        search: string[],
        def?: DictionaryWord
    ): DictionaryWord | undefined {
        if (!def) return;
        let d = { ...def };
        for (let part of d.parts) {
            part.definition = addMarks(removeMarks(part.definition), search);
            part.part = addMarks(removeMarks(part.part), search);
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
        noteVisible();

        const t = getWordElem(key, item.id);
        if (!t) return;
        updateTitle(t);
    });

    function updateWord() {
        const t = getWordElem(key, item.id);
        if (!t) return;
        item.word = t.innerHTML;

        if (item.word == '') {
            if (!deleteWord(item)) {
                item.word = t.title;
            }
            return;
        }

        if (t.title != item.word) {
            dispatch('updateWord', { word: item, key });
        }
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

    function updateNote() {
        if (item.def === '') {
            item.def = undefined;
        }
        noteVisible();
        dispatch('updateDefinition', { word: item, key });
    }

    function noteVisible() {
        if (item.def !== undefined && item.def !== '') {
            showNote(false);
        } else {
            hideNote();
        }
    }

    function showNote(focus: boolean) {
        const e = document.getElementById(`note-empty-${key}-${item.id}`);
        const s = document.getElementById(`note-shown-${key}-${item.id}`);
        if (e) {
            e.classList.add('hidden');
        } else {
            console.log(`could not find: note-empty-${key}-${item.id}`);
        }
        if (s) {
            s.classList.remove('hidden');
            if (focus) {
                const t = s.querySelector('textarea');
                if (t) {
                    t.focus();
                }
            }
        }
    }

    function hideNote() {
        const e = document.getElementById(`note-empty-${key}-${item.id}`);
        const s = document.getElementById(`note-shown-${key}-${item.id}`);
        if (e) {
            e.classList.remove('hidden');
        }
        if (s) {
            s.classList.add('hidden');
        }
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

            <div class="note-container">
                <div id="note-empty-{key}-{item.id}" class="note-empty hidden">
                    <button on:click={() => showNote(true)} title="Add Note">
                        <!-- <i class="fa-solid fa-note-sticky" /> -->
                        <i class="fa-solid fa-circle-plus" />
                    </button>
                </div>
                <div id="note-shown-{key}-{item.id}" class="note-shown hidden">
                    <legend>Notes</legend>
                    <textarea
                        class="note-text form-control"
                        bind:value={item.def}
                        on:input={adjustTextarea}
                        on:blur={updateNote}
                    />
                </div>
            </div>

            <div class="tag-list">
                <div class="tags-label">Tags</div>
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
        color: #eec009;
        content: '\f005';
        font-weight: 900;
    }

    .tags-label {
        margin-right: 0.5rem;
        color: #4b4b4b;
        align-self: center;
        font-family: var(--heading-font);
        font-weight: bold;
        font-size: 0.95rem;
    }

    .tag-list {
        display: flex;
        flex-wrap: wrap;
        padding: 0.3rem 1rem;
        width: fit-content;
        margin-left: auto;
        justify-content: flex-end;
    }

    .detail-arrow {
        display: inline-block;
        margin-left: auto;
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
        width: 100%;
    }

    details summary {
        list-style-type: none;
        margin-left: 0.3rem;
        display: flex;
    }

    .word-item {
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
        /* width: 90%; */
        background: rgb(247, 244, 239);
        background: linear-gradient(
            90deg,
            rgba(247, 244, 239, 1) 0%,
            rgba(139, 134, 123, 1) 3%,
            rgba(117, 113, 104, 1) 50%,
            rgba(139, 134, 123, 1) 97%,
            rgba(247, 244, 239, 1) 100%
        );
    }

    hr:first-of-type {
        display: none;
    }

    .note-container legend {
        color: #28292a;
    }

    .note-empty {
        text-align: right;
        margin-top: -0.5rem;
        margin-right: 0.8rem;
        margin-left: 1rem;
        margin-bottom: 0.3rem;
    }

    .note-shown {
        margin-right: 1rem;
        margin-left: 1rem;
        margin-bottom: 1rem;
    }

    .note-empty button {
        border: 0px;
        background: transparent;
        color: #eec009;
        font-size: 1.7rem;
    }

    .note-text {
        width: 100%;
        resize: vertical;
    }

    .note-shown.hidden {
        display: none;
    }

    .note-empty.hidden {
        display: none;
    }
</style>
