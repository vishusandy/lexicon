<script lang="ts">
    import { tick } from 'svelte';
    import { base } from '$app/paths';
    import Tags from './Tags.svelte';
    import DictDef from './DictDef.svelte';
    import { APIProviders, type DictionaryWord } from '../dictionary';
    import { enterPressed } from '../events';
    import type { WordList, Word as WordType } from '../types';
    import { adjustTextarea, toTitleCase, maybeString } from '../utils';
    import { list_add, list_get, list_save, list_sort, word_cache } from '../words';

    export let key: string;
    let list: WordList = list_get(key);

    let word: string = '';
    let def: string = '';
    let tags: string[] = [];
    let added: WordType | undefined = undefined;
    let favorite: boolean = false;
    let dict_def: DictionaryWord | undefined = undefined;
    let dict_def_word: string = '';

    let dup: WordType | undefined = undefined;

    let added_timer_fade: ReturnType<typeof setTimeout> | undefined = undefined;
    let added_timer_remove: ReturnType<typeof setTimeout> | undefined = undefined;
    let input_timer: ReturnType<typeof setTimeout> | undefined = undefined;
    const post_input_delay: number = 300;

    function handleInput() {
        updateDup();
        newInputTimer();
    }

    function newInputTimer() {
        if (input_timer) {
            clearTimeout(input_timer);
            input_timer = undefined;
        }
        input_timer = setTimeout(() => updateDictCache(), post_input_delay);
    }

    function updateDup() {
        let lower = word.trim().toLowerCase();
        dup = list.words.find((w) => w.cache?.word === lower);

        const form = document.getElementById(key + '-add-form');
        if (form) {
            const word_input = <HTMLInputElement | null>form.querySelector('input.word');
            const btn = <HTMLButtonElement | null>form.querySelector('button.add');

            if (word_input) {
                word_input.setCustomValidity(dup ? 'Duplicate word' : '');
                // if (word) {
                //     word_input.classList.remove('empty');
                // } else {
                //     word_input.classList.add('empty');
                // }
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
    function trimDuplicateWord(): boolean {
        updateDup();

        if (dup) {
            word = word.trim();
            def = def.trim();
            return true;
        }

        return false;
    }

    function updateDictCache() {
        if (list.auto_defs === true && word != '' && word != dict_def_word) {
            APIProviders.default.lookup(word).then((data) => {
                if (data && word !== '') {
                    dict_def_word = word;
                    dict_def = data;
                } else {
                    dict_def = undefined;
                    dict_def_word = '';
                }
            });
        }
    }

    function updateTags() {
        tags = [...new Set(tags)];
    }

    function wordLostFocus() {
        trimDuplicateWord();
        updateDictCache();
    }

    function getWord(): WordType {
        const definition = maybeString(def);
        const tags_trimmed = tags.length === 0 ? undefined : tags.map((t) => t.trim());

        let w: WordType = {
            id: 0,
            word: toTitleCase(word.trim()),
            favorite,
            def: definition,
            dict_def: undefined,
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

    async function addedAlert(w: WordType) {
        if (added_timer_fade) {
            clearTimeout(added_timer_fade);
            added_timer_fade = undefined;
        }
        if (added_timer_remove) {
            clearTimeout(added_timer_remove);
            added_timer_remove = undefined;
        }

        added = w;
        await tick();
        added_timer_fade = setTimeout(() => {
            const a = document.getElementById(key + '-added-alert');
            if (a) {
                a.style.opacity = '0';
            }
        }, 8000);
        added_timer_remove = setTimeout(() => {
            const a = document.getElementById(key + '-added-alert');
            if (a) {
                a.remove();
            }
            added = undefined;
        }, 12000);
    }

    function addWord(e: Event) {
        // return immediately if the word is a duplicate
        if (trimDuplicateWord()) return false;

        let w = getWord();

        addedAlert(w);

        if (!list.auto_defs) {
            addWordFinish(w);
            return;
        }

        if (!dict_def || word != dict_def_word) {
            APIProviders.default
                .lookup(w.word)
                .then((data) => {
                    w.dict_def = data ? data : undefined;
                })
                .finally(() => {
                    addWordFinish(w);
                });
        } else {
            w.dict_def = dict_def;
            addWordFinish(w);
        }
    }

    function addWordFinish(w: WordType) {
        list_add(list, w);
        list_sort(list);
        list_save(list);

        const word_input = <HTMLInputElement | null | undefined>(
            document.getElementById(key + '-add-form')?.querySelector('input.word')
        );
        if (word_input) {
            word_input.classList.add('empty');
        }

        tags = [];
        word = '';
        def = '';
        dup = undefined;
        dict_def = undefined;
        dict_def_word = '';
    }
</script>

<form id="{key}-add-form" class="add-form-container mt-4" on:submit|preventDefault={addWord}>
    <!-- <div class="add-container"> -->
    <div class="mb-3 word-group">
        <label for="{key}-add-input" class="form-label" title="required"
            >Word<span class="required">*</span></label
        >
        <!-- svelte-ignore a11y-autofocus -->
        <input
            id="{key}-add-input"
            bind:value={word}
            on:input={handleInput}
            on:focusout={wordLostFocus}
            required={true}
            type="text"
            class="word form-control"
            autofocus={true}
        />
    </div>
    <div class="mb-3 note-group">
        <label
            class="label form-label"
            on:keydown={focusDef}
            on:click={focusDef}
            for="{key}-add-input">Notes</label
        >

        <textarea
            id="{key}-add-input"
            bind:value={def}
            on:input={adjustTextarea}
            class="def form-control"
        />
        <!-- <div
            contenteditable="true"
            on:keydown={enterPressed}
            bind:innerHTML={def}
            id="{key}-add-def"
            class="def form-control"
        /> -->
    </div>
    <div class="label" on:keydown={focusAddTag} on:click={focusAddTag}>Tags</div>
    <div class="tag-container">
        <div class="tag-list">
            <Tags {key} bind:tags on:updateTags={updateTags} />
        </div>
    </div>

    {#if dict_def}
        <DictDef dict={dict_def} scheme="dark" />
    {/if}

    <div class="alert-box">
        {#if dup}
            <div class="duplicate-alert alert alert-danger">
                <p>
                    Word <a href="{base}/list?word={dup.id}"
                        ><dfn class="word">{word.trim()}</dfn></a
                    > exists
                </p>
            </div>
        {:else if added}
            <div id="{key}-added-alert" class="added-alert alert alert-success">
                Added word <a href="{base}/list?word={added.id}">{added.word}</a>
            </div>
        {/if}
    </div>

    <div id="{key}-add-container" class="add-container">
        <button type="submit" class="add btn btn-primary">Add Word </button><br />
    </div>
    <div class="required-description">
        <span class="required">*</span> required field
    </div>
</form>

<style>
    .tag-list {
        display: flex;
        color: #47535e;
    }

    .alert-box {
        margin-top: 1rem;
        margin-bottom: 2rem;
        height: 2rem;
    }

    .duplicate-alert {
        padding: 0.7rem 1rem;
        margin: 1rem 0px;
        transition: all 3s ease-in-out;
    }

    .duplicate-alert p {
        margin: 0px;
    }

    .added-alert {
        padding: 0.7rem 1rem;
        margin: 1rem 0px;
        transition: all 4s ease-in;
    }

    .tag-container {
        width: fit-content;
        margin-top: 0.5rem;
        margin-left: 1rem;
        margin-bottom: 1.5rem;
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
        resize: none;
    }

    .required-description {
        color: #393b3b;
    }

    .required {
        color: #f74b4b;
        font-style: italic;
    }

    .word-group,
    .note-group {
        margin-bottom: 2rem;
        margin-left: 1rem;
    }

    .word-group label,
    .note-group label {
        margin-left: -1rem;
    }

    label,
    .label {
        font-size: 1.2rem;
        font-weight: bold;
    }
</style>
