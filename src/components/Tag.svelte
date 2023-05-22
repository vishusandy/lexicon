<script lang="ts">
    import { enterSpacePressed } from '../events';
    import { createEventDispatcher } from 'svelte';

    export let tag: string;
    export let index: number;

    const dispatch = createEventDispatcher();

    function checkUpdate(e: Event) {
        if (tag == '' || tag == '<br>') {
            dispatch('removeTag', { index });
        } else {
            dispatch('tagUpdated', { tag, index });
        }
    }

    function remove(e: Event) {
        dispatch('removeTag', { index });
    }

    function removeKeydown(e: KeyboardEvent) {
        if (e.code == 'Enter' || e.code == 'NumpadEnter') {
            remove(e);
        }
    }
</script>

<div class="tag-btn">
    <span
        class="tag form-border"
        bind:innerHTML={tag}
        on:focusout={checkUpdate}
        on:keydown={enterSpacePressed}
        contenteditable="true"
    >
        {tag}
    </span>
    <button class="x-tag">
        <i on:click={remove} on:keydown={removeKeydown} class="fa-solid fa-xmark" />
    </button>
</div>

<style lang="scss">
    @use '../styles/mixins.scss';

    .x-tag {
        background-color: transparent;
        border: 0px;
        display: inline-block;
        font-family: 'Font Awesome 6 Free';
        font-weight: 600;
        // color: #a8303c;
        color: #c54754;
        font-size: 0.85rem;
        margin-left: -0.3rem;
        margin-right: -0.4em;
        text-shadow: 0px 0px 2px #c6afaf;
        position: relative;
        top: -0.25rem;
    }

    .tag::before {
        @include mixins.hashtag;
    }

    .tag {
        cursor: text;
        display: inline-block;
        width: fit-content;
        padding: 0.1rem 0.6rem;
        padding-right: 0.3rem;
        font-style: italic;
    }

    .tag-btn {
        @include mixins.tag;
        padding-left: 0.1rem;
    }

    .tag-btn:hover:not(:focus) {
        cursor: default;
        background-color: #d1d2d4;
    }
</style>
