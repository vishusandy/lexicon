<script lang="ts">
    import { enterPressed } from '../utils';
    import { createEventDispatcher } from 'svelte';
    import { browser } from '$app/environment';
    import type { Word } from '../types';

    const dispatch = createEventDispatcher();

    export let key: string;
    export let item: Word;
    export let readonly: boolean = false;

    let spacer: string;
    $: spacer = !item.def || item.def == '<br>' ? '' : 'spacer';

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

{#if !readonly}
    <li id="{key}-{item.id}" on:click|self={li_clicked} on:keydown|self={li_enter} class={spacer}>
        <button class="remove-word-btn" on:click={() => deleteWord(item)}
            ><i class="fa-solid fa-xmark" /></button
        >

        <dfn
            class="word"
            contenteditable="true"
            on:blur={() => updateWord(item)}
            on:keydown={enterPressed}
            bind:innerHTML={item.word}>{item.word}</dfn
        >
        <p
            class="word-definition"
            contenteditable="true"
            bind:innerHTML={item.def}
            on:blur={() => updateDefinition(item)}
        >
            {#if item.def}{item.def}{/if}
        </p>
    </li>
{:else}
    <div class={spacer}>
        <a href="/list/?word={item.id}"><dfn class="word">{item.word}</dfn></a>
        <p class="word-definition">
            {#if item.def}{item.def}{/if}
        </p>
    </div>
{/if}

<style>
    .highlight {
        background: yellow;
    }

    li {
        list-style-type: none;
        transition: background-color 1.5s ease-in-out;
    }

    .remove-word-btn {
        background: transparent;
        border: 0px;
    }

    .spacer .word-definition::before {
        content: '-';
        margin-right: 0.3rem;
    }

    .word-definition {
        margin-left: 0.3rem;
        display: inline;
    }
</style>
