<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import { SortBy, SortOrder } from '../types';
    const dispatch = createEventDispatcher();

    export let key: string;
    export let sort_by: SortBy;
    export let sort_order: SortOrder;

    let sort_title: string;
    let desc: boolean = sort_order === SortOrder.Desc;

    $: sort_order = desc ? SortOrder.Desc : SortOrder.Asc;
    $: sort_title = desc ? 'Descending sort order' : 'Ascending sort order';

    function updateSort(e: Event) {
        dispatch('updateSort', { sort_by, sort_order, key });
    }
</script>

<div class="sort-container">
    <form on:submit|preventDefault>
        <!-- <label for="{key}-sort-by" class="sort-by-label">Sort By</label> -->
        <div class="sort-form-options">
            <select id="{key}-sort-by" bind:value={sort_by} on:change={updateSort} title="Sort by">
                <option value="word" selected={sort_by == SortBy.Word}>Word</option>
                <option value="id" selected={sort_by == SortBy.Id}>Date</option>
            </select><input
                id="{key}-sort-order"
                bind:checked={desc}
                on:change={updateSort}
                type="checkbox"
                title={sort_title}
                class="sort-checkbox form-check-input"
            /><label
                for="{key}-sort-order"
                class="sort-checkbox-label form-check-label"
                title={sort_title}
            />
        </div>
    </form>
</div>

<style>
    .sort-form-options {
        /* border: 1px solid #646464; */
        border-radius: 0.9rem;
        padding: 0.1rem 0.5rem 0.1rem 0rem;
        background: #e9e9e9;
    }

    select {
        appearance: none;
        background-color: transparent;
        /* color: #d9d9d9; */
        display: inline;
        /* border: 1px solid #acacac; */
        border: 0px;
        border-radius: 0.9rem;
        border-bottom-right-radius: 0px;
        border-top-right-radius: 0px;
        /* padding: 0.15rem 0.2rem 0.15rem 0.2rem; */
        /* height: 2.4rem; */
        height: 2rem;
        text-align: right;
    }

    .sort-checkbox-label {
        /* position: absolute; */
        /* border: 1px solid #ccc; */
        display: inline;
        font-family: 'Font Awesome 6 Free';
        font-size: 0.75rem;
        /* color: #d9d9d9; */
        text-align: center;
        padding: 0.5rem 0.2rem 0.3rem 0.2rem;
        transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    }

    .sort-checkbox {
        display: inline;
        visibility: hidden;
        height: 0px;
        width: 0px;
        overflow: hidden;
        /* position: absolute; */
        opacity: 0;
        color: white;
    }

    .sort-checkbox:focus + .sort-checkbox-label {
        outline: 0;
        border-color: #86b7fe;
        box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
    }

    .sort-checkbox:active + .sort-checkbox-label {
        outline: 0;
        border-color: #86b7fe;
        box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
    }

    /* descending */
    .sort-checkbox[type='checkbox']:checked + .sort-checkbox-label::after {
        /* up arrow */
        /* content: '\f885'; */
        content: '\f161';
        /* content: '\f176'; */
        font-weight: 600;
        content: '\f0dc';
    }

    /* ascending */
    .sort-checkbox + .sort-checkbox-label::after {
        /* down arrow */
        content: '\f884';
        /* content: '\f160'; */
        /* content: '\f175'; */
        font-weight: 600;
        content: '\f0dc';
    }
</style>
