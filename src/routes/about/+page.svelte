<script lang="ts">
    import Nav from '../../components/Nav.svelte';
</script>

<Nav current="about" />

<div class="about">
    <h1>About</h1>

    <section class="alert alert-danger">
        <h2>Note</h2>
        <p>
            This vocab list is <b>only</b> stored on <i>your</i> device. Your word list will not be viewable
            from other devices.
        </p>
    </section>
    <div class="dark-theme">
        <h2>How it works</h2>
        <div class="about-group">
            <p>
                This was made with <a
                    href="https://kit.svelte.dev/"
                    target="_blank"
                    rel="noreferrer">Svelte Kit</a
                >. All data is stored in your browser locally using the
                <a
                    href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API"
                    target="_blank"
                    rel="noreferrer">Web Storage API</a
                >.
            </p>
            <p>
                Dictionary defintions and audio pronunciations are made possible by <a
                    href="https://dictionaryapi.dev/"
                    target="_blank"
                    rel="noreferrer">dictionaryapi.dev</a
                >. Please support them!
            </p>
            <p>
                You can find the source code at
                <a href="https://github.com/vishusandy/lexicon" target="_blank" rel="noreferrer"
                    >https://github.com/vishusandy/lexicon</a
                >.
            </p>
        </div>

        <h2>About Me</h2>
        <div class="about-group">
            <p>
                My GitHub: <a href="https://github.com/vishusandy" target="_blank" rel="noreferrer"
                    >https://github.com/vishusandy</a
                >
            </p>
            <p>
                My blog: <a href="https://vishusandy.github.io/" target="_blank" rel="noreferrer"
                    >https://vishusandy.github.io/</a
                >
            </p>
        </div>
    </div>
</div>

<style>
    .about-group,
    section {
        margin-bottom: 2rem;
        padding: 1rem;
        border-radius: 0.75rem;
    }

    section.alert {
        padding: 0.5rem 1rem 1rem 1rem;
        margin-left: 1rem;
        /* margin-right: 1rem; */
    }

    section.alert h2 {
        font-size: 1.3rem;
        padding: 0px 1rem;
        text-align: center;
        margin: 0px;
    }

    section.alert p {
        margin: 0px;
    }

    section p,
    .about-group p {
        margin-left: 1rem;
    }

    h2 {
        font-size: 1.7rem;
        margin-bottom: 0.75rem;
        /* margin-left: -1.5rem; */
        /* margin-left: 2rem; */
    }

    .dark-theme .about-group:last-of-type {
        margin-bottom: 1rem;
    }

    .dark-theme .about-group {
        margin-left: 1rem;
        background: #34353a;
        color: #dbe5ec;
    }
</style>
