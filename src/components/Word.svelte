<script lang="ts">
    import { enterPressed } from '../events';
    import { createEventDispatcher } from 'svelte';
    import { afterUpdate, onMount } from 'svelte';
    import { browser } from '$app/environment';
    import type { Word } from '../types';
    import { removeMarks } from '../events';

    const dispatch = createEventDispatcher();

    export let key: string;
    export let item: Word;
    export let highlight: string[] | undefined = undefined;
    // let def: string;
    // $: def = !item.def ? '': (highlight)? '<mark>' +  + '<mark>': item.def;

    let spacer: string;
    $: spacer = !item.def || item.def == '<br>' ? '' : 'has-definition';

    onMount(() => {
        const t = document.getElementById(key + '-word-' + item.id);
        if (!t) return;
        updateTitle(t);
        updateMore();
    });

    afterUpdate(() => {
        addHighlights(key + '-def-' + item.id);
        updateMore();
    });

    function removeMore(e: Event) {
        console.log('removeMore');
        const t = <HTMLElement>document.getElementById(`${key}-${item.id}`);
        if (!t) return;
        t.classList.remove('full-defs');
    }
    function addMore(e: Event) {
        console.log('addMore');
        const t = <HTMLElement>document.getElementById(`${key}-${item.id}`);
        if (!t) return;
        t.classList.add('full-defs');
    }

    function updateMore() {
        const li = document.getElementById(`${key}-${item.id}`);
        if (li && li.scrollHeight - 3 > li.clientHeight) {
            li.classList.add('more');
        } else {
            li?.classList.remove('more');
        }
    }
    function updateWord(word: Word) {
        const t = document.getElementById(key + '-word-' + item.id);
        if (t) {
            if (t.title != word.word) {
                updateTitle(t);
                dispatch('updateWord', { word, key });
            }
        } else {
            dispatch('updateWord', { word, key });
        }
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

    function updateTitle(dfn: HTMLElement) {
        dfn.title = item.word;
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

    function li_focus_definition(target: HTMLElement) {
        const has_def = target.classList.contains('has-definition');
        let def = <HTMLElement | null>target.querySelector('.word-definition');
        if (def && (!has_def || target.scrollHeight - 3 <= target.clientHeight)) {
            def.focus();
            // target.classList.remove('full-defs');
        } else {
            // target.classList.toggle('full-defs');
        }
    }

    function li_clicked(e: MouseEvent) {
        if (e.target) {
            li_focus_definition(<HTMLElement>e.target);
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

    <div class="more-btn" on:click={addMore}><i class="fa-solid fa-chevron-down" /></div>
    <div class="less-btn" on:click={removeMore}><i class="fa-solid fa-chevron-up" /></div>

    <dfn
        id="{key}-word-{item.id}"
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
            addHighlights(key + '-def-' + item.id);
        }}
        on:focus={() => removeHighlights(key + '-def-' + item.id)}
    >
        {#if item.def}{item.def}{/if}
    </div>
</li>

<style>
    .word-item {
        width: 100%;
        margin: 0rem auto;
        overflow: hidden;
        height: 2.5rem;
        border-left: 0px;
        border-right: 0px;
        padding: 0.5rem 1rem;
        word-wrap: break-word;
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

    .word-item:focus-within,
    .full-defs {
        /* why???? */
        padding-bottom: calc(0.5rem - 3px);
        /* padding-bottom: calc(0.5rem);  */
    }
    .word-item:focus-within,
    .full-defs {
        overflow: auto;
        height: unset;
        min-height: 2rem;
    }
    /* .full-defs .word-definition {
        overflow: auto;
    } */

    .more-btn,
    .less-btn {
        color: #82858a;
    }

    .more-btn {
        display: none;
    }

    .less-btn {
        display: none;
    }

    .word-item.more.full-defs .less-btn,
    .word-item.more:focus-within .less-btn {
        display: block;
        float: right;
        padding-right: 0px;
    }
    .word-item:not(:focus-within):not(.full-defs).more .more-btn {
        display: block;
        float: right;
        padding-right: 0px;
    }
</style>
