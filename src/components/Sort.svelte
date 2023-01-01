<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import { SortBy, SortOrder } from '../types';
    const dispatch = createEventDispatcher();

    export let key: string;
    export let sort_by: SortBy;
    export let sort_order: SortOrder;
    let sort_title: string;
    let desc: boolean = sort_order === SortOrder.Desc;
    // let desc: boolean;
    $: sort_order = desc ? SortOrder.Desc : SortOrder.Asc;
    $: sort_title = desc ? 'Descending order' : 'Ascending order';

    function updateSort(e: Event) {
        dispatch('updateSort', { sort_by, sort_order, key });
    }
</script>

<div class="sort-container">
    <form on:submit|preventDefault>
        <div class="sort-group">
            <!-- <label for="{key}-sort-by" class="sort-by-label">Sort By</label> -->
            <select id="{key}-sort-by" bind:value={sort_by} on:change={updateSort}>
                <option value="word" selected={sort_by == SortBy.Word}>Word</option>
                <option value="id" selected={sort_by == SortBy.Id}>Id</option>
            </select>
            <div class="sort-order-group">
                <input
                    id="{key}-sort-order"
                    bind:checked={desc}
                    on:change={updateSort}
                    type="checkbox"
                    title={sort_title}
                    class="sort-checkbox form-check-input"
                />
                <label
                    for="{key}-sort-order"
                    class="sort-checkbox-label form-check-label"
                    title={sort_title}
                />
            </div>
        </div>
    </form>
</div>

<style>
    .sort-container {
        margin-right: auto;
    }

    .sort-checkbox {
        opacity: 0;
        width: 2rem;
        margin: 0px 0px 0px 0px;
    }

    .sort-checkbox-label {
        font-family: 'Font Awesome 6 Free';
        font-size: 0.75rem;
        color: rgba(50, 57, 63, 0.75);
        height: 2.4rem;
        border: 1px solid #ced4da;
        border-radius: 0.375rem;
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
        margin-left: calc(-2rem - 1px);
        padding: 0.55rem 0.7rem 0.2rem;
        transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
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

    /* .sort-checkbox:focus {
        outline: 0;
        border-color: #86b7fe;
        box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
    } */

    /* descending */
    .sort-checkbox[type='checkbox']:checked + .sort-checkbox-label::after {
        /* up arrow */
        /* content: '\f885'; */
        /* content: '\f161'; */
        content: '\f176';
        font-weight: 600;
    }

    /* ascending */
    .sort-checkbox + .sort-checkbox-label::after {
        /* down arrow */
        /* content: '\f884'; */
        /* content: '\f160'; */
        content: '\f175';
        font-weight: 600;
    }

    .sort-group {
        /* margin-top: 0.4rem; */
        display: flex;
        align-items: center;
        justify-content: center;
        height: 2rem;
    }

    .sort-order-group {
        display: flex;
    }

    .sort-group label {
        flex: 0 0 auto;
    }

    select {
        border-radius: 0px;
        height: 2.4rem;
        border-left: 0px;
    }

    form {
        display: inline-block;
    }
</style>
