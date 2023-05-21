<script lang="ts">
    import { browser } from '$app/environment';
    import { createEventDispatcher } from 'svelte';

    import { APIProviders } from '../dictionary';
    import Alert from './Alert.svelte';
    import type { Word as WordType, WordList } from '../types';
    import {
        list_blank,
        list_default,
        list_get,
        list_save,
        list_update,
        new_word_cache
    } from '../words';

    const dispatch = createEventDispatcher();

    export let key: string;
    export let autodefs: boolean;
    let alert: string | undefined = undefined;
    let alert_type: string | undefined = undefined;

    function restoreDefaults() {
        if (!browser) return;

        if (
            !window.confirm('This will replace the current word list with the defaults.  Continue?')
        ) {
            return;
        }

        const def = list_default(key);
        list_save(def);
    }

    function clearWords() {
        if (!browser) return;

        if (!window.confirm('This will clear all words in your current word list.  Continue?')) {
            return;
        }

        const blank = list_blank(key);
        list_save(blank);

        // dispatch('refreshlist', true);
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

    function auto_defs_on() {
        let list = list_get(key);
        list.auto_defs = true;
        list_save(list);

        dispatch('refreshlist', true);
    }

    function auto_defs_off() {
        let list = list_get(key);
        list.auto_defs = false;
        list_save(list);

        dispatch('refreshlist', true);
    }
</script>

<legend class="options-group-title">Options</legend>
<div class="options-group">
    <div class="option-section options-group-cols">
        <div class="options-subgroup">
            <button
                on:click={() => refreshUndefinedWords(key)}
                type="button"
                class="btn btn-primary">Find new definitions</button
            >
            <button on:click={() => refreshAllWords(key)} type="button" class="btn btn-primary"
                >Refresh all defintions</button
            >
        </div>
        <div class="option-section options-subgroup">
            <button on:click={restoreDefaults} type="button" class="btn btn-danger"
                >Restore defaults</button
            >
            <button on:click={clearWords} type="button" class="btn btn-danger">Clear words</button>
        </div>
    </div>
</div>

<legend class="options-group-title">Dictionary Lookup</legend>
<div class="options-group">
    <div>
        <p>
            Automatic dictionary lookup is: <b
                >{#if autodefs === true}on{:else}off{/if}</b
            >
        </p>
        <div class="toggle-autodefs">
            {#if autodefs}
                <button class="btn btn-primary" on:click={auto_defs_off}>Turn off</button>
            {:else}
                <button class="btn btn-primary" on:click={auto_defs_on}>Turn on</button>
            {/if}
        </div>
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
    .option-section {
        margin-bottom: 1.3rem;
    }
    .options-group-cols {
        display: flex;
        justify-content: space-around;
        gap: 1.5rem;
        flex-wrap: wrap;
    }

    .options-group p:first-of-type {
        margin-top: 0px;
    }

    button:last-of-type {
        margin-bottom: 0px;
    }

    .options-subgroup {
        display: flex;
        flex-wrap: wrap;
        gap: 1.5rem;
        flex-direction: column;
        width: fit-content;
    }

    div.toggle-autodefs {
        text-align: center;
    }
</style>
