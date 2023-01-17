<script lang="ts">
    import { browser } from '$app/environment';
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    export let key: string;

    function validBackupName(e: Event): boolean {
        // const t = <HTMLInputElement | null>e.target;
        const t = <HTMLInputElement | null>document.getElementById(key + '-new-backup-name');
        if (!t) return false;
        if (t.value != '') {
            t.classList.remove('empty');
            if (browser) {
                const ls = localStorage.getItem(t.value.toLowerCase());
                if (t.value == key) {
                    t.setCustomValidity(`'${key}' is a reserved name`);
                    return false;
                } else if (ls == null) {
                    t.setCustomValidity('');
                } else {
                    t.setCustomValidity('Backup exists');
                    return false;
                }
            }
        } else {
            t.classList.add('empty');
        }
        return true;
    }

    function submitNewBackup(e: Event) {
        if (!validBackupName(e)) {
            e.preventDefault();
            return;
        }
        const t = <HTMLInputElement | null>document.getElementById(key + '-new-backup-name');
        if (t) {
            dispatch('backupsUpdated', { name: t.value });
            console.log('backing up');
            t.value = '';
        }
    }
</script>

<form on:submit={submitNewBackup}>
    <div class="new-backup">
        <input
            id="{key}-new-backup-name"
            type="text"
            class="new-backup-name form-control"
            placeholder="Backup name"
            on:blur={validBackupName}
        />
        <button class="btn btn-primary">Create Backup</button>
    </div>
</form>

<style>
    .new-backup {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
    }

    .new-backup-name {
        flex-grow: 0;
        width: fit-content;
    }
</style>
