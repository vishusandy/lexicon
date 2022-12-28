<script lang="ts">
    import { page } from '$app/stores';
    import Words from '../../components/Words.svelte';
</script>

<h1>Vocab</h1>
<a href="/add/">Add words</a>

<Words key="words" />
