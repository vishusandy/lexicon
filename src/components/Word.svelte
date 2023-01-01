<script lang="ts">
    import { enterPressed } from '../utils';
    import { createEventDispatcher } from 'svelte';
    import { afterUpdate } from 'svelte';
    import { browser } from '$app/environment';
    import type { Word } from '../types';
    import { removeMarks } from '../utils';

    const dispatch = createEventDispatcher();

    export let key: string;
    export let item: Word;
    export let highlight: string[] | undefined = undefined;
    // let def: string;
    // $: def = !item.def ? '': (highlight)? '<mark>' +  + '<mark>': item.def;

    let spacer: string;
    $: spacer = !item.def || item.def == '<br>' ? '' : 'has-definition';

    afterUpdate(() => {
        addMarks(key + '-def-' + item.id);
    });

    function addMarks(id: string) {
        const d = document.getElementById(id);
        if (!d || !highlight || highlight.length === 0) return;
        console.log('updating');
        // d.innerHTML = `<mark>${d.innerHTML}</mark>`;
        for (let i = 0; i < highlight.length; i++) {
            const s = highlight[i];
            if (s == '') continue;
            const re = new RegExp(`(${s})`, 'gi');
            console.log(`replacing '${s}'`);
            d.innerHTML = d.innerHTML.replace(re, '<mark>$1</mark>');
        }
    }

    function updateWord(word: Word) {
        dispatch('updateWord', { word, key });
    }

    function updateDefinition(word: Word) {
        dispatch('updateDefinition', { word, key });
    }

    function deleteWord(word: Word) {
        if (!browser) return;
        if (!window.confirm('Delete word?')) {
            return;
        }
        dispatch('deleteWord', { word, key });
    }

    function removeHighlights(id: string) {
        const t = document.getElementById(id);
        if (!t) return;
        t.innerHTML = removeMarks(t.innerHTML);
    }

    function li_focus_definition(target: HTMLElement) {
        let def = <HTMLElement | null>target.querySelector('.word-definition');
        if (def) {
            def.focus();
        }
    }

    function li_clicked(e: MouseEvent) {
        if (e.target) {
            let t = <HTMLElement>e.target;
            li_focus_definition(t);
        }
    }

    function li_enter(e: KeyboardEvent) {
        if (e.code == 'Enter' || (e.code == 'NumpadEnter' && e.target)) {
            let t = <HTMLElement>e.target;
            li_focus_definition(t);
        }
    }
</script>

<li
    id="{key}-{item.id}"
    on:click|self={li_clicked}
    on:keydown|self={li_enter}
    class="{spacer} list-group-item word-item"
>
    <button class="remove-word-btn" on:click={() => deleteWord(item)}>
        <i class="fa-solid fa-xmark" />
    </button>

    <dfn
        class="word"
        contenteditable="true"
        on:blur={() => updateWord(item)}
        on:keydown={enterPressed}
        bind:innerHTML={item.word}>{item.word}</dfn
    >
    <div
        id="{key}-def-{item.id}"
        class="word-definition"
        contenteditable="true"
        bind:innerHTML={item.def}
        on:keydown={enterPressed}
        on:blur={() => {
            updateDefinition(item);
            addMarks(key + '-def-' + item.id);
        }}
        on:focus={() => removeHighlights(key + '-def-' + item.id)}
    >
        {item.def}
    </div>
</li>

<style>
    .word-item {
        width: 100%;
        margin: 0rem auto;
        overflow: hidden;
        transition: height 1s ease-in-out;
        height: 2.5rem;
    }

    .highlight {
        background: yellow;
    }

    li:first-of-type {
        border-top-width: 0px;
    }

    li {
        margin-bottom: 4rem;
        list-style-type: none;
        transition: background-color 1.5s ease-in-out;
    }

    .remove-word-btn {
        color: rgb(156, 160, 165);
        background: transparent;
        border: 0px;
    }

    .has-definition .word-definition::before {
        content: '-';
        color: #6c757d;
        margin-right: 0.3rem;
    }

    li:not(.has-definition) .word::after {
        content: '       \200C';
    }

    .word-definition {
        display: inline;
        margin: 0px 0px 0px 0.2rem;
        color: #41474d;
        /* overflow: hidden; */
    }

    .word-item:focus-within {
        overflow: auto;
        height: unset;
    }

    .full-defs .word-definition {
        overflow: auto;
    }
</style>
