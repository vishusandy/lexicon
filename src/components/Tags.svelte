<script lang="ts">
    import { tick } from 'svelte';
    import { createEventDispatcher } from 'svelte';
    import { afterUpdate, onMount } from 'svelte';
    import Tag from './Tag.svelte';
    import { enterSpacePressed } from '../events';
    import type { RemoveTagEvent, TagUpdatedEvent } from '../types';

    const dispatch = createEventDispatcher();

    export let key: string;
    export let tags: string[] = [];

    async function focusNewTag() {
        await tick();
        const t = document.getElementById(`${key}-tags`);
        if (t) {
            t.focus();
        }
    }

    function tagChanged(e: TagUpdatedEvent) {
        if (tags[e.index]) {
            tags[e.index] = e.tag;
            dispatch('updateTags');
        }
    }

    function processTags(e: Event) {
        const target = <HTMLElement>e.target;
        if (target.innerText) {
            const ts = target.innerText
                .trim()
                .split(' ')
                .map((t) => t.trim().toLocaleLowerCase())
                .filter((t) => t != '' && t != '<br>');
            tags.push(...ts);
            tags = [...new Set(tags)];
            target.innerText = '';
            focusNewTag();
            dispatch('updateTags');
        }
    }

    function deleteTag(e: RemoveTagEvent) {
        tags.splice(e.index, 1);
        tags = tags;
        dispatch('updateTags');
    }
</script>

{#each tags as tag, i}
    <Tag
        bind:tag
        index={i}
        on:removeTag={(e) => deleteTag(e.detail)}
        on:tagUpdated={(e) => tagChanged(e.detail)}
    />
{/each}
<span
    id="{key}-tags"
    class="tag-input form-border"
    title="New tag"
    placeholder="+"
    on:keydown={enterSpacePressed}
    on:focusout={processTags}
    contenteditable="true"
/>

<style lang="scss">
    @use '../mixins.scss';

    .tag-input {
        @include mixins.tag;
        padding: 0.1rem 0.6rem;
        text-align: center;
    }

    .tag-input:hover:not(:focus) {
        cursor: default;
    }

    .tag-input:not(:focus)::before {
        content: '+';
    }

    .tag-input:focus::before {
        @include mixins.hashtag;
    }
</style>
