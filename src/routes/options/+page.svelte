<script lang="ts">
    import { base } from '$app/paths';
    import Backups from '../../components/Backups.svelte';
    import Option from '../../components/Options.svelte';
    import Nav from '../../components/Nav.svelte';
</script>

<Nav current="options" />
<!-- <nav class="main">
    <a href="{base}/list">List words</a>
    <a href="{base}/add">Add words</a>
</nav> -->

<h1>Options</h1>

<div class="options-page">
    <Backups key="words" />
    <Option key="words" />
</div>

<style>
</style>
