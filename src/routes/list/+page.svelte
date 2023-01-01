<script lang="ts">
    import { page } from '$app/stores';
    import Words from '../../components/Words.svelte';
</script>

<div class="list-vocab-container">
    <!-- <h1>Word List</h1> -->
    <!-- <a href="../add/">Add words</a> -->
    <div class="list-vocab">
        <Words key="words" />
    </div>
</div>

<style>
    h1 {
        text-align: center;
    }

    .list-vocab-container {
        display: flex;
        flex-direction: column;
        height: 100dvh;
        max-width: 550px;
        margin: 0px auto;
    }

    .list-vocab {
        /* margin-top: 1rem; */
        margin-bottom: 1rem;
        /* max-height: 50dvh; */
        /* overflow: scroll; */
        /* border: 1px solid black; */
        /* border-radius: 0.75rem; */
    }
</style>
