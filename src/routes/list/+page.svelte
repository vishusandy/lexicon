<script lang="ts">
    import { base } from '$app/paths';
    import Words from '../../components/Words.svelte';
    import Nav from '../../components/Nav.svelte';
</script>

<Nav current="list" />

<div class="list-vocab-container">
    <Words key="words" />
</div>
