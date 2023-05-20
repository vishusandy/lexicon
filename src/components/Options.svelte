<script lang="ts">
    import { browser } from '$app/environment';
    import { APIProviders } from '../dictionary';
    import Alert from './Alert.svelte';
    import type { Word as WordType, WordList } from '../types';
    import { list_blank, list_get, list_save, list_update, new_word_cache } from '../words';

    export let key: string;
    let alert: string | undefined = undefined;
    let alert_type: string | undefined = undefined;

    function clearWords() {
        if (!browser) return;

        if (!window.confirm('This will clear all words in your current word list.  Continue?')) {
            return;
        }

        const blank = list_blank(key);
        list_save(blank);
    }

    function refreshAllWords(key: string) {
        function refreshWordUpdate(list_word: WordType, updated: WordType) {
            list_word.dict_def = updated.dict_def;
            return true;
        }

        if (!browser) return undefined;
        if (!key) return;

        let list: WordList = list_get(key);
        if (
            !window.confirm(
                `Refresh all ${list.words.length} words?\n\nThis will overwrite existing definitions.`
            )
        ) {
            return;
        }

        let updated = 0;
        let failed: string[] = [];

        let promises = list.words.map(async (word) => {
            try {
                const data = await APIProviders.default.lookup(word.word);
                if (data) {
                    word.dict_def = data;
                    updated += 1;
                } else {
                    failed.push(word.word);
                }
            } finally {
                word.cache = new_word_cache(word);
                list_update(list, word, refreshWordUpdate);
            }
        });

        Promise.allSettled(promises).then(() => {
            if (failed.length == 0) {
                alert = `Updated ${updated} words`;
                alert_type = 'info';
            } else {
                alert_type = 'error';
                alert = `Failed to update ${failed.length} words.  ${failed}`;
            }

            list_save(list);
        });
    }

    function refreshUndefinedWords(key: string) {
        function refreshWordUpdate(list_word: WordType, updated: WordType) {
            list_word.dict_def = updated.dict_def;
            return true;
        }

        if (!browser) return undefined;
        if (!key) return;
        if (!window.confirm(`Lookup definitions for words without definitions?`)) return;

        let list: WordList = list_get(key);
        let updated = 0;
        let failed: string[] = [];

        let promises = list.words
            .filter((word) => word.dict_def === undefined)
            .map(async (word) => {
                try {
                    const data = await APIProviders.default.lookup(word.word);
                    if (data) {
                        word.dict_def = data;
                        updated += 1;
                    } else {
                        failed.push(word.word);
                    }
                } finally {
                    word.cache = new_word_cache(word);
                    list_update(list, word, refreshWordUpdate);
                }
            });

        Promise.allSettled(promises).then(() => {
            if (failed.length == 0) {
                alert = `Updated ${updated} words`;
                alert_type = 'info';
            } else {
                alert_type = 'error';
                alert = `Failed to update ${failed.length} words.<br>${failed}`;
            }

            list_save(list);
        });
    }
</script>

<legend class="options-group-title">Options</legend>
<div class="options-group options-group-cols">
    <div class="options-subgroup">
        <button on:click={() => refreshUndefinedWords(key)} type="button" class="btn btn-primary"
            >Find new definitions</button
        >
        <button on:click={() => refreshAllWords(key)} type="button" class="btn btn-primary"
            >Refresh all defintions</button
        >
    </div>
    <div class="options-subgroup">
        <button on:click={clearWords} type="button" class="btn btn-danger">Clear words</button>
    </div>
</div>

{#if alert}
    {#if alert_type != undefined}
        <Alert bind:message={alert} alert_style={alert_type} />
    {:else}
        <Alert bind:message={alert} />
    {/if}
{/if}

<style>
    .options-group-cols {
        display: flex;
        justify-content: space-around;
        gap: 1rem;
    }

    button {
        margin-bottom: 1.3rem;
        padding-left: 2rem;
        padding-right: 2rem;
    }

    button:last-of-type {
        margin-bottom: 0px;
    }

    .options-subgroup {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        width: fit-content;
        /* margin: 0px auto; */
    }
</style>
