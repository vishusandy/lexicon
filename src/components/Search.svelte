<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import { escapePressed } from '../events';
    const dispatch = createEventDispatcher();

    export let key: string;
    let search: string;

    function updateFilter(e: Event) {
        dispatch('updateFilter', { search, key });
    }

    function resetFilterEsc(e: KeyboardEvent) {
        if (escapePressed(e)) {
            search = '';
            dispatch('updateFilter', { search, key });
        }
    }

    function resetFilterBtn(e: Event) {
        search = '';
        dispatch('updateFilter', { search, key });
    }
</script>

<div class="search-container">
    <form on:submit|preventDefault={updateFilter}>
        <div class="search-icon"><i class="fa-solid fa-magnifying-glass" /></div>
        <input
            bind:value={search}
            placeholder=""
            on:input={updateFilter}
            on:keydown={resetFilterEsc}
            class="search-input form-control"
            type="text"
        />
        {#if search}
            <button on:click={resetFilterBtn} class="reset-btn"><i class="fa-solid fa-x" /></button>
        {/if}
    </form>
</div>

<style>
    .search-container {
        display: block;
        margin: 0rem auto 0.5rem;
        background: white;
        width: 90%;
        max-width: 20rem;
    }

    .search-icon {
        cursor: text;
        position: absolute;
        margin-top: 0.55rem;
        margin-left: 1rem;
        color: #92939c;
        z-index: 0;
    }

    .search-input {
        border-radius: 0.6rem;
        display: inline-block;
        font-size: 1.12rem;
        padding: 0.4rem 1.9rem 0.4rem 2.1rem;
        text-align: center;
        border: 1px solid #828282;
        background: #fff0;
        position: relative;
        z-index: 99;
    }

    .search-input:not(:focus) {
        box-shadow: 0px 0px 3px #e2e2e2;
    }

    .reset-btn {
        background-color: transparent;
        border: 0px;
        font-size: 0.9rem;
        color: rgb(158, 30, 30);
        padding: 0.3rem 0.3rem 0.3rem;
        position: absolute;
        margin-left: -1.8rem;
        margin-top: 0.3rem;
    }
</style>
