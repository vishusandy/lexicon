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
            dispatch('updateFilter', { search: '', key });
            search = '';
        }
    }

    function resetFilterBtn(e: Event) {
        dispatch('updateFilter', { search: '', key });
        search = '';
    }
</script>

<div class="search-container">
    <form on:submit|preventDefault={updateFilter}>
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
        display: inline-block;
        margin-left: auto;
        background: white;
        text-align: right;
    }

    .search-input {
        display: block;
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0px;
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        padding-top: calc(0.375rem + 0.5px);
        padding-bottom: calc(0.375rem + 0.5px);
        text-align: left;
    }

    form {
        display: inline-block;
    }
</style>
