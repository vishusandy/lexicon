<script lang="ts">
    import Nav from '../../components/Nav.svelte';
    import Add from '../../components/Add.svelte';
</script>

<Nav current="add" />

<div class="add-vocab">
    <h1>Add Word</h1>

    <Add key="words" />
</div>
