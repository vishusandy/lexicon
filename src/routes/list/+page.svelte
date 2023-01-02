<script lang="ts">
    import Words from '../../components/Words.svelte';
</script>

<h1>Word List</h1>
<div class="list-vocab-container">
    <nav>
        <a href="../add/">Add words</a>
    </nav>
    <Words key="words" />
</div>

<style>
    nav {
        position: sticky;
        top: 0px;
        height: 2rem;
        background: white;
        z-index: 1000;
        flex: 0 0 auto;
    }

    .list-vocab-container {
        display: flex;
        flex-direction: column;
    }
</style>
