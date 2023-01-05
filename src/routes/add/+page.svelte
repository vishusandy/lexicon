<script lang="ts">
    import { base } from '$app/paths';
    import Add from '../../components/Add.svelte';
</script>

<nav class="main">
    <a href="{base}/list/">List words</a>
</nav>
<div class="add-vocab">
    <h1>Add Word</h1>

    <Add key="words" />
</div>
