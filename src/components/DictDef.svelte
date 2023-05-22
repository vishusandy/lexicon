<script lang="ts">
    import { onMount, afterUpdate } from 'svelte';
    import type { DictionaryWord } from '../dictionary';
    import { addMarks, removeMarks } from '../utils';
    export let dict: DictionaryWord;
    export let scheme: string = '';
    export let search: string[] = [];

    let word: string;

    $: word = addMarks(dict.word, search);

    // onMount(() => {
    //     word = addMarks(dict.word, search);
    // });

    // afterUpdate(() => {
    //     word = addMarks(dict.word, search);
    // });
</script>

<div class="dict-def-container {scheme}">
    <dl>
        <dt>{@html word}</dt>
        {#if dict.parts.length > 0}
            <dd>
                <ul>
                    {#each dict.parts as part}
                        <li>
                            <p>
                                <span class="pos">{@html part.part}</span>
                                <span class="def">{@html part.definition}</span>
                            </p>
                            {#if part.synonyms.length > 0}
                                <p class="syn">
                                    Synonyms:
                                    {#each part.synonyms as syn}
                                        {syn}
                                    {/each}
                                </p>
                            {/if}
                            {#if part.antonyms.length > 0}
                                <p class="ant">
                                    Antonyms:
                                    {#each part.antonyms as ant}
                                        {ant}
                                    {/each}
                                </p>
                            {/if}
                        </li>
                    {/each}
                </ul>
            </dd>
        {/if}
    </dl>
</div>

<style>
    dl {
        margin-top: 0.5rem;
    }

    p {
        margin: 0px;
    }

    dt {
        font-weight: normal;
        overflow-wrap: break-word;
    }

    .syn,
    .ant {
        margin-left: 1rem;
    }

    .pos {
        color: #505458;
        font-style: italic;
        margin-right: 0.5rem;
        cursor: default;
    }

    .dark .pos {
        color: #9ba3aa;
    }

    ul {
        list-style-type: disc;
    }
</style>
