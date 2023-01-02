<script lang="ts">
    import { page } from '$app/stores';
    import Words from '../../components/Words.svelte';
</script>

<h1>Word List</h1>
<div class="list-vocab-container">
    <!-- <div class="list-vocab"> -->
    <nav>
        <a href="../add/">Add words</a>
    </nav>
    <Words key="words" />
    <!-- </div> -->
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
        /* height: 100dvh; */
        max-width: 550px;
        margin: 0px auto;
        /* margin-top: 1rem; */
    }
</style>
