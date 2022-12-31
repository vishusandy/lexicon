<script lang="ts">
    import { enterSpacePressed } from '../utils';
    import { createEventDispatcher } from 'svelte';

    export let tag: string;
    export let index: number;

    const dispatch = createEventDispatcher();

    function checkBlank(e: Event) {
        if (tag == '' || tag == '<br>') {
            dispatch('removeTag', { index });
        }
    }

    function remove(e: Event) {
        console.log('dispatching remove event');
        dispatch('removeTag', { index });
    }
    function removeKeydown(e: KeyboardEvent) {
        if (e.code == 'Enter' || e.code == 'NumpadEnter') {
            remove(e);
        }
    }
</script>

<div class="tag-btn">
    <div
        class="tag form-border"
        bind:innerHTML={tag}
        on:focusout={checkBlank}
        on:keydown={enterSpacePressed}
        contenteditable="true"
    >
        {tag}
    </div>
    <div class="x-tag"><i on:click={remove} class="fa-solid fa-xmark" /></div>
</div>

<style lang="scss">
    @use '../mixins.scss';

    .x-tag {
        display: inline-block;
        font-family: 'Font Awesome 6 Free';
        font-weight: 600;
        color: #a8303c;
        font-size: 0.8rem;
        margin-left: -0.3rem;
        margin-right: -0.1rem;
        position: relative;
        top: -0.3rem;
    }

    .tag::before {
        @include mixins.hashtag;
    }

    .tag {
        display: inline-block;
        width: fit-content;
        padding: 0.1rem 0.6rem;
    }

    .tag-btn {
        background-color: #e2e3e5;
        border: 1px solid #ced4da;
        border-radius: 0.375rem;
        margin: 0.1rem 0.16rem;
        padding: 0.1rem 0.6rem 0.1rem 0.1rem;
        display: inline-block;
    }

    .tag-btn:hover:not(:focus) {
        cursor: default;
        background-color: #d1d2d4;
    }
</style>
