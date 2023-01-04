<script lang="ts">
    import type { DictionaryWord } from '../dictionary';
    export let key: string;
    export let dict: DictionaryWord;
</script>

<div class="dict-def-container">
    <dl>
        <dt>{dict.word}</dt>
        {#if dict.parts.length > 0}
            <dd>
                <ul>
                    {#each dict.parts as part}
                        <li>
                            <p>
                                <span class="pos">{part.part}</span>:
                                <span class="def">{part.definition}</span>
                            </p>
                            {#if part.synonyms.length > 0}
                                <p class="syn-ack">
                                    Synonyms:
                                    {#each part.synonyms as syn}
                                        {syn}
                                    {/each}
                                </p>
                            {/if}
                            {#if part.antonyms.length > 0}
                                <p class="syn-ack">
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

    .syn-ack {
        margin-left: 1rem;
    }

    .pos {
        /* font-weight: 600; */
    }

    .def {
        color: #404346;
    }

    ul {
        list-style-type: disc;
    }
</style>
