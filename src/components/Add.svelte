<script lang="ts">
    import Word from './Word.svelte';
    import Tags from './Tags.svelte';
    import { list_add, list_init, list_save, list_sort, word_cache } from '../words';
    import type { WordList, Word as WordType } from '../types';
    import { enterPressed } from '../utils';

    export let key: string;
    let list: WordList = list_init(key);

    let word: string = '';
    let def: string = '';
    let tag_str: string = '';
    let tags: string[] = [];
    // $: tags = tag_str.split(' ').map((t) => t.trim());
    let dict_def: string = '';
    let favorite: boolean = false;

    let dup: WordType | undefined = undefined;

    function updateDup() {
        let lower = word.trim().toLocaleLowerCase();
        dup = list.words.find((w) => w.cache?.word === lower);

        const form = document.getElementById(key + '-add-form');
        if (form) {
            const word_input = <HTMLInputElement | null>form.querySelector('input.word');
            const btn = <HTMLButtonElement | null>form.querySelector('button.add');

            if (word_input) {
                word_input.setCustomValidity(dup ? 'Duplicate word' : '');
                if (word) {
                    word_input.classList.remove('empty');
                } else {
                    word_input.classList.add('empty');
                }
            }

            if (btn) {
                if (dup) {
                    btn.setCustomValidity('Duplicate word');
                    btn.disabled = true;
                } else {
                    btn.setCustomValidity('');
                    btn.disabled = false;
                }
            }
        }
    }

    // word form has either lost focus or it was submitted
    // returns false if the entered word is a duplicate
    function trimDuplicateWord() {
        updateDup();

        if (dup) {
            word = word.trim();
            def = def.trim();
            return true;
        }

        return false;
    }

    function maybeString(s: string): string | undefined {
        const trimmed: string = s.trim();
        return trimmed != '' ? trimmed : undefined;
    }

    function getWord(): WordType {
        const definition = maybeString(def);
        const dict_definition = maybeString(dict_def);

        const tags_trimmed = tags.length === 0 ? undefined : tags.map((t) => t.trim());

        let w: WordType = {
            id: 0,
            word: word.trim(),
            favorite,
            def: definition,
            dict_def: dict_definition,
            tags: tags_trimmed,
            cache: undefined
        };

        word_cache(w);

        return w;
    }

    function focusDef(e: Event) {
        const d = document.getElementById(key + '-add-def');
        if (!d) return;
        d.focus();
    }

    function focusAddTag(e: Event) {
        const d = document.getElementById(key + '-tags');
        if (!d) return;
        d.focus();
    }

    function addWord(e: Event) {
        if (trimDuplicateWord()) return false;

        const w = getWord();

        list_add(list, w);
        list_sort(list);
        list_save(list);

        const word_input = <HTMLInputElement | null | undefined>(
            document.getElementById(key + '-add-form')?.querySelector('input.word')
        );

        if (word_input) {
            word_input.classList.add('empty');
        }

        word = '';
        def = '';
        dup = undefined;
    }
</script>

<form id="{key}-add-form" on:submit|preventDefault={addWord} class="mt-4">
    <div class="mb-3">
        <label for="{key}-add-input" class="form-label">Word</label>
        <input
            id="{key}-add-input"
            bind:value={word}
            on:input={updateDup}
            on:focusout={trimDuplicateWord}
            required={true}
            type="text"
            class="word empty form-control"
        />
    </div>
    <div class="mb-3">
        <div class="label form-label" on:keydown={focusDef} on:click={focusDef}>Definition</div>
        <div
            contenteditable="true"
            on:keydown={enterPressed}
            bind:innerHTML={def}
            id="{key}-add-def"
            class="def form-control"
        />
    </div>
    <div class="label" on:keydown={focusAddTag} on:click={focusAddTag}>Tags</div>
    <div class="tag-container">
        <Tags {key} bind:tags />
    </div>

    {#if dup}
        <div class="duplicate-alert alert alert-danger">
            <p>
                Word <a href="/list/?word={dup.id}"><dfn class="word">{word.trim()}</dfn></a> exists
            </p>
            <!-- <Word {key} readonly={true} item={dup} /> -->
        </div>
    {/if}

    <div class="add-container">
        <button type="submit" class="add btn btn-primary">Add Word </button><br />
    </div>
</form>

<style>
    .duplicate-alert {
        padding: 0.7rem 1rem;
        margin: 1rem 0px;
        /* text-align: center; */
    }

    .duplicate-alert p {
        margin: 0px;
    }

    .tag-container {
        width: fit-content;
        margin-top: 0.2rem;
        margin-left: 0.4rem;
    }

    .add-container {
        width: fit-content;
        margin: 2rem auto;
    }

    .label {
        cursor: default;
        display: inline-block;
    }

    input.word {
        font-family: var(--input-font);
    }

    button.add {
        padding: 0.375rem 1.3rem;
    }

    .def {
        font-family: var(--input-font);
        font-size: 1rem;
        font-family: var(--input-font);
        overflow-wrap: break-word;
        transition: height 0.3s ease-out, border-color 0.15s ease-in-out,
            box-shadow 0.15s ease-in-out;
    }
</style>
