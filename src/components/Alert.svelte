<script lang="ts">
    import { onMount, onDestroy } from 'svelte';

    export let message: string | undefined;
    export let remove_time: number = 4000;
    export let alert_style: string = 'error';

    let node: HTMLElement;
    let fade_timer: ReturnType<typeof setTimeout> | undefined;
    let remove_timer: ReturnType<typeof setTimeout> | undefined;

    onMount(() => {
        fade_timer = setTimeout(fadeAlert, remove_time);
        remove_timer = setTimeout(removeAlert, remove_time + 1500);
    });

    onDestroy(() => {
        if (fade_timer) {
            clearTimeout(fade_timer);
        }
        if (remove_timer) {
            clearTimeout(remove_timer);
        }
    });

    function fadeAlert() {
        node.style.opacity = '0';
    }

    function removeAlert() {
        message = undefined;
        node.parentNode?.removeChild(node);
    }
</script>

{#if message}
    <div class="alert-type-{alert_style} alert-box" bind:this={node}>
        {message}
    </div>
{/if}

<style>
    .alert-box {
        width: 100%;
        max-width: 650px;
        position: fixed;
        bottom: 0px;
        margin: 0px;
        margin-bottom: 0.2rem;
        border-radius: 0.375rem;
        padding: 0.75rem 1rem;
        text-align: center;
        transition: opacity 1.5s ease-in;
    }

    .alert-type-error {
        background-color: #f8d7da;
        border: 1px solid #f5c2c7;
        color: #842029;
    }

    .alert-type-info {
        background-color: #e9ebec;
        border: 1px solid #f8f9fa;
    }
</style>
