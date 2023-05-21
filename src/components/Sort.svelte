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
        border-radius: 0.9rem;
        padding: 0.1rem 0.5rem 0.1rem 0rem;
        background: #e9e9e9;
        transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    }

    .sort-form-options:focus-within {
        outline: 0;
        border-color: #86b7fe;
        box-shadow: 0 0 0 0.25rem rgba(61, 137, 252, 0.699);
    }

    select {
        appearance: none;
        background-color: transparent;
        display: inline;
        border: 0px;
        border-radius: 0.9rem;
        border-bottom-right-radius: 0px;
        border-top-right-radius: 0px;
        padding-left: 0.9rem;
        height: 2rem;
        text-align: right;
    }

    select:focus {
        border: 0px;
        box-shadow: none;
    }

    .sort-checkbox-label {
        display: inline;
        font-family: 'Font Awesome 6 Free';
        font-size: 0.75rem;
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
        opacity: 0;
        color: white;
    }

    .sort-checkbox:focus + .sort-checkbox-label {
        outline: 0;
        border-color: #86b7fe;
        box-shadow: 0 0 0 0.25rem rgba(61, 137, 252, 0.699);
    }

    .sort-checkbox:active + .sort-checkbox-label {
        outline: 0;
        border-color: #86b7fe;
        box-shadow: 0 0 0 0.25rem rgba(61, 137, 252, 0.699);
    }

    /* descending */
    /* up arrow */
    .sort-checkbox[type='checkbox']:checked + .sort-checkbox-label::after {
        content: '\f161';
        font-weight: 600;
        content: '\f0dc';
    }

    /* ascending */
    /* down arrow */
    .sort-checkbox + .sort-checkbox-label::after {
        content: '\f884';
        font-weight: 600;
        content: '\f0dc';
    }
</style>
