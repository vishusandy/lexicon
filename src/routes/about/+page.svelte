<script lang="ts">
    import Nav from '../../components/Nav.svelte';
</script>

<Nav current="about" />

<div class="about">
    <h1>Lexicon</h1>

    <section class="alert-section alert alert-danger">
        <h2>Note</h2>
        <p>
            This vocab list is <b>only</b> stored on <i>your</i> device. Your word list will not be viewable
            from other devices.
        </p>
    </section>
    <div class="dark-theme">
        <section id="about">
            <h2>About</h2>
            <div class="about-group">
                <p>An app to keep track of interesting words and help grow your vocabulary.</p>
                <p>
                    Features: automatic dictionary definitions, tags, notes, favorites, and word
                    list backups.
                </p>
            </div>
        </section>

        <section id="how-to-use-it">
            <h2>How to use it</h2>
            <div class="about-group">
                <ul>
                    <li>
                        Use the <a href="add">Add Words</a> page to add entries to your vocab list.
                    </li>
                    <li>
                        Use the <a href="options">Options</a> page to create and manage backups.
                    </li>
                    <li>
                        View your <a href="list">Word List</a> to manage and search your word list:
                    </li>
                    <ul>
                        <li>
                            <div>Search for tags by prepending a hashtag to a search term.</div>
                            <div>
                                Example: <code>#interesting</code> will match all entries with a tag
                                named 'interesting'.
                            </div>
                        </li>
                        <li>
                            Show only favorited words by typing <code>:favorites</code> in the filter.
                        </li>
                        <li>
                            <div>
                                Clicking the <i class="fa-regular fa-star" title="star" /> icon will
                                mark a word as a favorite.
                            </div>
                            <div>
                                Your favorites will appear at the top of the list (or bottom if the
                                list is sorted in descending order).
                            </div>
                        </li>
                        <li>
                            Dictionary definitions for individual words can be retrieved by clicking
                            the <i class="fa-solid fa-arrows-rotate" title="refresh" /> icon.
                        </li>
                        <li>
                            Multiple words can be shown (<i
                                class="fa-regular fa-eye"
                                title="show icon"
                            />), hidden (<i class="fa-regular fa-eye-slash" title="hide icon" />),
                            or deleted (<i class="fa-solid fa-xmark" title="delete icon" />) by
                            checking the box next to the word and selecting an action (located below
                            the search bar).
                        </li>
                        <li>
                            Notes can be added to a word by clicking the <i
                                class="fa-solid fa-circle-plus"
                                title="add note icon"
                            /> icon.
                        </li>
                    </ul>
                </ul>
            </div>
        </section>

        <section id="how-it-works">
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
                    >. The app consists of static css/js/html files so it can be easily hosted on
                    static hosting providers.
                </p>
                <p>
                    Dictionary defintions and audio pronunciations are made possible by querying <a
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
        </section>

        <section id="who-made-it">
            <h2>Who made it</h2>
            <div class="about-group">
                <p>
                    My GitHub: <a
                        href="https://github.com/vishusandy"
                        target="_blank"
                        rel="noreferrer">https://github.com/vishusandy</a
                    >
                </p>
                <p>
                    My blog: <a
                        href="https://vishusandy.github.io/"
                        target="_blank"
                        rel="noreferrer">https://vishusandy.github.io/</a
                    >
                </p>
            </div>
        </section>
    </div>
</div>

<style>
    .about-group,
    .alert-section {
        margin-bottom: 2rem;
        padding: 1rem 2rem;
        border-radius: 0.75rem;
    }

    .about-group {
        box-shadow: 2px 2px 5px #959595;
    }

    code {
        font-weight: bold;
        color: #f6fcff;
    }

    section.alert {
        padding: 0.5rem 1rem 1rem 1rem;
        margin-left: 1.5rem;
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

    h2 {
        font-size: 1.7rem;
        margin-bottom: 0.75rem;
    }

    .about-group ul {
        list-style-position: inside;
    }

    .about-group ul ul {
        list-style-position: outside;
        margin-left: 0.4rem;
    }

    .about li {
        margin-top: 0.5rem;
    }

    .about-group ul:first-child {
        padding-left: 0px;
    }

    .dark-theme .about-group:last-of-type {
        margin-bottom: 1rem;
    }

    .dark-theme .about-group {
        margin-left: 1.5rem;
        background: #34353a;
        color: #d4dbe0;
    }
</style>
