<script lang="ts">
    import Add from '../components/Add.svelte';
</script>

<div class="add-vocab">
    <h1>Add Vocab</h1>
    <a href="./list/">List words</a>

    <Add key="words" />
</div>

<style>
    h1 {
        text-align: center;
    }
</style>
