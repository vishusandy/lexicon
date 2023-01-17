<script lang="ts">
    import { base } from '$app/paths';
    import Backups from '../../components/Backups.svelte';
    import Option from '../../components/Options.svelte';
    import AddBackup from '../../components/AddBackup.svelte';
    import type { NewBackup } from '../../types';
</script>

<nav class="main">
    <a href="{base}/list">List words</a>
    <a href="{base}/add">Add words</a>
</nav>

<div class="options-page">
    <!-- <div class="options-group"> -->
    <!-- <legend>New Backup</legend> -->
    <!-- <AddBackup key="words" /> -->
    <!-- </div> -->
    <!-- <div class="options-group"> -->
    <!-- <legend>Restore Backup</legend> -->
    <Backups key="words" />
    <Option key="words" />
    <!-- </div> -->
</div>

<style>
    /* .options-group {
        border: 1px solid #ccc;
        border-radius: 0.44rem;
        padding: 0px 1rem 1rem;
        margin: 2rem auto;
    }

    legend {
        cursor: default;
        user-select: none;
        margin-top: -0.85rem;
        background-color: #fff;
        width: fit-content;
        padding: 0px 0.3rem;
        margin-bottom: 1rem;
    } */
</style>
