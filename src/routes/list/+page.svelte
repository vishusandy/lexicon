<script lang="ts">
    import { base } from '$app/paths';
    import Words from '../../components/Words.svelte';
    import Nav from '../../components/Nav.svelte';
</script>

<Nav current="list" />
<h1>Word List</h1>
<div class="list-vocab-container">
    <Words key="words" />
</div>
