<script lang="ts">
    import { base } from '$app/paths';
    import { browser } from '$app/environment';
    if (browser) {
        window.location.assign(`${base}/add`);
    }
</script>

<!-- <svelte:head>
    <meta http-equiv="Refresh" content="0; URL=./add" />
</svelte:head> -->
