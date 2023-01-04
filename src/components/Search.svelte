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
            placeholder="filter"
            on:input={updateFilter}
            on:keydown={resetFilterEsc}
            class="search-input form-control"
        />
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
        position: absolute;
        margin-top: 0.55rem;
        margin-left: 0.7rem;
        color: rgb(185, 187, 206);
    }

    .search-input {
        border-radius: 0.6rem;
        display: block;
        font-size: 1.12rem;
        padding: 0.4rem 1.5rem 0.4rem 2.1rem;
        text-align: left;
    }
</style>
