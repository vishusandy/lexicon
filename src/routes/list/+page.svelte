<script lang="ts">
    import { page } from '$app/stores';
    import Words from '../../components/Words.svelte';
</script>

<div class="list-vocab">
    <h1>Word List</h1>
    <a href="../add/">Add words</a>

    <Words key="words" />
</div>

<style>
    h1 {
        text-align: center;
    }
</style>
