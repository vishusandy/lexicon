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
    }

    .search-input {
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0px;
        padding-top: calc(0.375rem + 0.5px);
        padding-bottom: calc(0.375rem + 0.5px);
    }

    form {
        display: inline-block;
    }
</style>
