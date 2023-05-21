<script lang="ts">
    import { base } from '$app/paths';
    import type { NavLink } from '../types';

    export let current: string;
    export let links: NavLink[] = [
        { name: 'Word List', url: base + '/list', page: 'list' },
        { name: 'Add Words', url: base + '/add', page: 'add' },
        { name: 'Options', url: base + '/options', page: 'options' },
        { name: 'About', url: base + '/about', page: 'about' }
    ];
</script>

<nav class="main">
    <menu>
        {#each links as link}
            <li>
                {#if link.page != current}
                    <a href={link.url}>{link.name}</a>
                {:else}
                    {link.name}
                {/if}
            </li>
        {/each}
    </menu>
</nav>
