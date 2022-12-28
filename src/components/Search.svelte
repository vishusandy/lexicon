<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    export let key: string;
    let search: string;

    function updateFilter(e: Event) {
        dispatch('updateFilter', { search, key });
    }
</script>

<form on:submit|preventDefault={updateFilter}>
    <input bind:value={search} on:input={updateFilter} />
</form>
