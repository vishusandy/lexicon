<script lang="ts">
    import type { DictionaryWord } from '../dictionary';
    export let key: string;
    export let dict: DictionaryWord | undefined;
</script>

{#if dict}
    <div class="dict-def-container">
        <div>{dict.word}</div>
    </div>
{/if}
