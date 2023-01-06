<script lang="ts">
    export let src: string;
    export let title: string = '';

    function playAudio(e: Event) {
        const t = (<HTMLAudioElement | null>e.target)?.querySelector('audio');
        if (t) {
            t.play();
        }
    }
</script>

<button on:click={playAudio}>
    <span class="phonetics">{title}</span>
    <audio {src}>
        <a href={src}>Audio</a>
    </audio>
</button>

<style>
    button {
        background-color: transparent;
        font-size: 0.9rem;
        border: 0px;
        margin: 0.1rem 0.2rem;
    }

    .phonetics {
        color: #3b3c3f;
    }

    button::before {
        color: #212529;
        font-family: 'Font Awesome 6 Free';
        font-weight: 900;
        content: '\f028';
    }
</style>
