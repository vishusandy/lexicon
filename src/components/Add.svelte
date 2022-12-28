<script lang="ts">
    import Word from './Word.svelte';
    import { list_add, list_init, list_save, list_sort } from '../words';
    import type { WordList, Word as WordType } from '../types';

    export let key: string;
    let list: WordList = list_init(key);

    let word: string = '';
    // let word_raw: string;
    // $: word = word_raw.trim();

    let def: string;
    let dup: WordType | undefined = undefined;

    function updateDup() {
        let lower = word.trim().toLocaleLowerCase();
        dup = list.words.find((w) => w.word.toLocaleLowerCase() == lower);
    }

    // word form has either lost focus or it was submitted
    function trimWord() {
        updateDup();
        if (dup) {
            word = word.trim();
            def = def.trim();
            return true;
        }
        return false;
    }

    function addWord(e: Event) {
        if (trimWord()) return;
        const trimmed: string = def.trim();
        const definition: string | undefined = trimmed != '' ? trimmed : undefined;

        list_add(list, word.trim(), definition);
        word = '';
        def = '';
        dup = undefined;
        list_sort(list);
        list_save(list);
    }
</script>

<form on:submit={addWord} on:focusout={trimWord}>
    <input bind:value={word} type="text" on:input={updateDup} />
    <button type="submit">Add</button><br />
    <textarea bind:value={def} placeholder="Definition" />
</form>

{#if dup}
    <p>Word '{word.trim()}' exists</p>
    <Word {key} readonly={true} item={dup} />
{/if}
