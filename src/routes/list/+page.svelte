<script lang="ts">
    import { base } from '$app/paths';
    import Words from '../../components/Words.svelte';
</script>

<nav class="main">
    <a href="{base}/add/">Add words</a>
</nav>
<!-- <h1>Word List</h1> -->
<div class="list-vocab-container">
    <Words key="words" />
</div>
