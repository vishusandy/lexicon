<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    export let key: string;
    let search: string;

    function updateFilter(e: Event) {
        dispatch('updateFilter', { search, key });
    }
</script>

<div class="search-container">
    <div class="search-bar">
        <form on:submit|preventDefault={updateFilter}>
            <input
                bind:value={search}
                placeholder="filter"
                on:input={updateFilter}
                class="search-input form-control"
            />
        </form>
    </div>
</div>

<style>
    .search-container {
        display: inline-block;
        margin-left: auto;
    }

    .search-bar {
        background: white;
        display: flex;
        position: sticky;
        padding: 0px;
        top: 0px;
        z-index: 999;
    }

    .search-input {
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0px;
    }

    form {
        display: inline-block;
    }
</style>
