<script lang="ts">
    import Tag from './Tag.svelte';
    import { enterSpacePressed } from '../events';
    import type { RemoveTagEvent } from '../types';

    export let key: string;
    export let tags: string[] = [];

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
        }
        console.log(tags);
    }

    function deleteTag(e: RemoveTagEvent) {
        tags.splice(e.index, 1);
        tags = tags;
    }
</script>

<div class="tag-list">
    {#each tags as tag, i}
        <Tag bind:tag index={i} on:removeTag={(e) => deleteTag(e.detail)} />
    {/each}
    <div
        id="{key}-tags"
        class="tag-input form-border"
        title="Add new tag"
        placeholder="+"
        on:keydown={enterSpacePressed}
        on:focusout={processTags}
        contenteditable="true"
    />
</div>

<style lang="scss">
    @use '../mixins.scss';
    .tag-list {
        display: flex;
    }

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
