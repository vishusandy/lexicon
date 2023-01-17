<script lang="ts">
    import { base } from '$app/paths';
    import Add from './Add.svelte';
    import type { NavLink } from '../types';

    export let current: string;
    export let links: NavLink[] = [
        { name: 'List Words', url: base + '/list', page: 'list' },
        { name: 'Add Words', url: base + '/add', page: 'add' },
        { name: 'Options', url: base + '/options', page: 'options' }
    ];
</script>

<nav class="main">
    {#each links as link}
        {#if link.page != current}
            <a href={link.url}>{link.name}</a>
        {/if}
    {/each}
</nav>
