<script lang="ts">
    import { browser } from '$app/environment';
    import { list_blank, list_save } from '../words';

    export let key: string;

    function clearWords() {
        if (!browser) return;

        if (!window.confirm('This will clear all words in your word list.  Continue?')) {
            return;
        }
        const blank = list_blank(key);
        list_save(blank);
    }
</script>

<legend class="options-group-title">Options</legend>
<div class="options-group">
    <button on:click={clearWords} type="button" class="btn btn-danger">Clear words</button>
</div>
