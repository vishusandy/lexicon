<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import { SortBy, SortOrder } from '../types';
    const dispatch = createEventDispatcher();

    export let key: string;
    export let sort_by: SortBy;
    export let sort_order: SortOrder;
    let desc: boolean = sort_order === SortOrder.Desc;
    // let desc: boolean;
    $: sort_order = desc ? SortOrder.Desc : SortOrder.Asc;

    function updateSort(e: Event) {
        dispatch('updateSort', { sort_by, sort_order, key });
    }
</script>

<form on:submit|preventDefault>
    <label for="{key}-sort-by">Sort By</label>
    <select id="{key}-sort-by" bind:value={sort_by} on:change={updateSort}>
        <option value="word" selected={sort_by == SortBy.Word}>Word</option>
        <option value="id" selected={sort_by == SortBy.Id}>Id</option>
    </select>
    <input id="{key}-sort-order" type="checkbox" bind:checked={desc} on:change={updateSort} />
    <label for="{key}-sort-order" title="Sort in descending order">Descending</label>
</form>
