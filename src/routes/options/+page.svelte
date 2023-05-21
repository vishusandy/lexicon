<script lang="ts">
    import { base } from '$app/paths';
    import Backups from '../../components/Backups.svelte';
    import Option from '../../components/Options.svelte';
    import Nav from '../../components/Nav.svelte';
    import { list_get } from '../../words';
    import type { BackupEntry } from '../../types';

    let list = list_get('words');

    let backups: BackupEntry[] = [];

    function updateBackups() {
        backups = [];
        for (let i = 0; i < localStorage.length; i++) {
            const k = localStorage.key(i);

            if (!k) {
                continue;
            }

            if (k !== 'words') {
                let l = list_get(k);
                backups.push({ name: k, key: i, size: l.words.length });
            } else {
                // add current word list to beginning of list
                backups.unshift({ name: k, key: i, size: list.words.length });
            }
        }
    }

    updateBackups();

    function handleRefresh(e: any) {
        list = list_get('words');
        updateBackups();
    }
</script>

<Nav current="options" />

<h1>Options</h1>

<div class="options-page">
    <Backups on:refreshlist={handleRefresh} {backups} key="words" />
    <Option on:refreshlist={handleRefresh} key="words" autodefs={list.auto_defs} />
</div>
