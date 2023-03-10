<script lang="ts">
    import { browser } from '$app/environment';
    import type { BackupEntry } from '../types';
    import { download_json } from '../words';
    import Modal from './Modal.svelte';

    export let key: string;
    let backups: BackupEntry[] = [];

    // restore modal
    let new_name: string = '';
    let rename_cur: boolean = true;

    // rename modal
    let rename_str: string = '';
    let rename_placeholder: string = '';

    function updateBackups() {
        for (let i = 0; i < localStorage.length; i++) {
            const k = localStorage.key(i);
            // if (k && k != key) {
            if (k) {
                backups.push({ name: k, key: i });
            }
        }
    }

    updateBackups();

    function refresh() {
        backups = [];
        updateBackups();
        backups = backups;
    }

    function validBackupName(e: Event, input_id: string): boolean {
        const t = <HTMLInputElement | null>document.getElementById(input_id);
        if (!t) {
            console.log('could not find id: ' + input_id);
            return false;
        }

        if (t.value != '') {
            t.setCustomValidity('');
            if (browser) {
                const ls = localStorage.getItem(t.value.toLowerCase());
                if (t.value.toLowerCase() == key.toLowerCase()) {
                    // console.log("name '" + t.value + "' is reserved");
                    t.setCustomValidity(`'${key}' is a reserved name`);
                } else if (ls != null) {
                    // console.log('name ' + t.value + ' exists');
                    t.setCustomValidity('Backup exists');
                } else {
                    return true;
                }
            }
        }
        return false;
    }

    function submitRename(d: HTMLDialogElement, e: Event): boolean {
        // validBackupName(e, key + '-rename-backup');
        // console.log('attempting to rename to ' + rename_str);
        if (!validBackupName(e, key + '-rename-backup')) {
            console.log('invalid name:' + rename_str);
            e.preventDefault();
            return false;
        }
        // const t = document.getElementById(key + '-rename-backup');
        const h = <HTMLInputElement | null>document.getElementById(key + '-rename-hidden');
        const new_name = rename_str.toLowerCase();
        const new_ls = localStorage.getItem(new_name);
        if (!h || !h.value || !rename_str || new_ls != null) return false;
        const old_name = h.value.toLowerCase();
        const old_ls = localStorage.getItem(old_name);
        if (!old_ls) return false;
        console.log('renaming ' + old_name + ' to ' + new_name);
        localStorage.setItem(new_name, old_ls);
        localStorage.removeItem(old_name);
        refresh();
        return true;
    }

    function submitRestore(t: HTMLDialogElement, e: Event): boolean {
        if (
            browser &&
            !rename_cur &&
            !window.confirm('This will erase the current word list, continue?')
        ) {
            console.log('cancelling');
            e.preventDefault();
            return false;
        }

        if (rename_cur && !validBackupName(e, key + '-original-name')) {
            e.preventDefault();
            return false;
        }

        const f = <HTMLFormElement | null>document.getElementById(key + '-backup-list-form');
        if (f) {
            const v = <RadioNodeList | null>f.elements.namedItem('btn-edit');
            const cur = localStorage.getItem(key.toLowerCase());
            if (!v || !cur) {
                return false;
            }

            const restore = localStorage.getItem(v.value);
            if (!restore) {
                return false;
            }

            if (rename_cur) {
                localStorage.setItem(new_name, cur);
            }
            localStorage.setItem(key, restore);

            refresh();
        }
        return true;
    }

    function submitNewBackup(e: Event) {
        const t = <HTMLInputElement | null>document.getElementById(key + '-new-backup-name');
        if (!browser || !t || !validBackupName(e, key + '-new-backup-name')) {
            e.preventDefault();
            return;
        }

        // ensure the current key has an existing value, otherwise it can't do anything
        const cur = localStorage.getItem(key.toLowerCase());
        if (!cur) {
            return;
        }

        localStorage.setItem(t.value.toLowerCase(), cur);
        refresh();
        t.value = '';
    }

    function openRestoreModal(e: Event) {
        const t = <HTMLDialogElement | null>document.getElementById('backup-modal');
        if (!t) return;
        t.showModal();
        e.preventDefault();
    }

    function openRenameModal(e: Event, name: string) {
        const t = <HTMLDialogElement | null>document.getElementById('rename-modal');
        if (!t) return;
        const r = <HTMLInputElement | null>document.getElementById(key + '-rename-backup');
        if (r) {
            r.placeholder = name;
        }
        const h = <HTMLInputElement | null>document.getElementById(key + '-rename-hidden');
        if (!h) {
            return;
        }
        h.value = name;
        t.showModal();
        e.preventDefault();
    }

    function closeRenameModal(t: HTMLDialogElement, e: Event) {
        const r = <HTMLInputElement | null>document.getElementById(key + '-rename-backup');
        if (r) {
            r.placeholder = '';
        }
    }

    function deleteBackup(e: Event, name: string): boolean {
        e.preventDefault();
        // const t = <HTMLButtonElement | null>e.target;
        if (!browser) return false;
        if (!window.confirm("Delete backup '" + name + "'?")) {
            return false;
        }
        localStorage.removeItem(name);
        refresh();
        return true;
    }
</script>

<legend class="options-group-title">New Backup</legend>
<div class="options-group">
    <form on:submit={submitNewBackup}>
        <div class="new-backup">
            <div>
                Backup name:
                <input
                    id="{key}-new-backup-name"
                    type="text"
                    class="new-backup-name form-control"
                    placeholder="new name"
                    on:blur={(e) => validBackupName(e, key + '-new-backup-name')}
                />
            </div>
            <button class="btn btn-primary">Create Backup</button>
        </div>
    </form>
</div>

<legend class="options-group-title">Restore Backup</legend>
<div class="options-group">
    <form id="{key}-backup-list-form">
        {#each backups as backup (backup.key)}
            <div class="backup-entry">
                <div class="backup-content">
                    {#if backup.name != key}
                        <button
                            type="button"
                            class="remove-btn"
                            on:click={(e) => deleteBackup(e, backup.name)}
                            ><i class="fa-solid fa-xmark" /></button
                        >
                    {:else}
                        <button type="button" class="remove-btn" disabled={true}
                            ><i class="fa-solid fa-xmark" /></button
                        >
                    {/if}
                    <button
                        on:click={(e) => download_json(backup.name)}
                        type="button"
                        class="btn download-btn"><i class="fa-solid fa-download" /></button
                    >
                    {#if backup.name != key}
                        <button
                            on:click={(e) => openRenameModal(e, backup.name)}
                            type="submit"
                            id="{key}-backup-rename-{backup.name}"
                            title="Rename backup"
                            value={backup.name}
                            class="btn rename-btn"><i class="fa-solid fa-pen" /></button
                        >
                        <input
                            type="radio"
                            name="btn-edit"
                            class="btn-edit"
                            title="Select backup for restore"
                            id="{key}-restore-{backup.key}"
                            required={true}
                            value={backup.name}
                        />
                    {:else}
                        <button type="button" disabled={true} class="btn rename-btn"
                            ><i class="fa-solid fa-pen" /></button
                        >
                    {/if}

                    <div class="backup-name">
                        <label
                            class="backup-name-label"
                            for="{key}-restore-{backup.key}"
                            title="Select backup for restore"
                        >
                            {backup.name}
                        </label>
                    </div>
                </div>
            </div>
        {/each}
        <div class="backup-submit">
            <button
                on:click={openRestoreModal}
                type="button"
                class="btn btn btn-danger"
                name="backups_action"
                value="restore">Restore</button
            >
        </div>
    </form>
</div>

<Modal id="backup-modal" onSubmit={submitRestore} submit_text="Restore">
    <div class="original-name">
        <div class="dialog-title">
            <input type="checkbox" bind:checked={rename_cur} id="{key}-rename-current" />
            <label for="{key}-rename-current">Backup current list</label>
        </div>
        <div>
            {#if rename_cur}
                Backup as:
                <input
                    id="{key}-original-name"
                    name="save-as"
                    type="text"
                    class="original form-control"
                    placeholder="new name"
                    required={true}
                    bind:value={new_name}
                    on:blur={(e) => validBackupName(e, key + '-original-name')}
                />
            {/if}
        </div>
    </div>
</Modal>

<Modal id="rename-modal" onSubmit={submitRename} onClose={closeRenameModal} submit_text="Rename">
    <input
        on:blur={(e) => validBackupName(e, key + '-rename-backup')}
        type="text"
        id="{key}-rename-backup"
        class="form-control"
        bind:value={rename_str}
    />
    <input type="hidden" id="{key}-rename-hidden" />
</Modal>

<style>
    .dialog-title {
        font-size: 1.1rem;
        margin-bottom: 1rem;
    }

    .new-backup {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
    }

    .new-backup-name {
        flex-grow: 0;
        width: fit-content;
        margin-top: 0.5rem;
        margin-left: 0.5rem;
    }

    .backup-entry {
        margin: 0.25rem 0px;
    }

    .backup-content {
        padding: 0.2rem 1.5rem;
        display: flex;
        flex-wrap: nowrap;
    }

    .backup-name {
        /* width: 100%; */
        flex-grow: 1;
    }

    .backup-name-label {
        padding-left: 0.35rem;
    }

    .backup-submit {
        /* display: flex;
        align-items: flex-start;
        justify-content: space-between; */
        margin-top: 1.5rem;
        text-align: center;
    }

    .original-name {
        margin: 0px auto;
    }

    .original {
        margin-top: 0.4rem;
        margin-left: 1rem;
        width: unset;
    }

    .remove-btn {
        padding: 0px;
    }

    .download-btn {
        padding: 0px;
        margin-left: 0.4rem;
        color: #434649;
    }

    .rename-btn {
        padding: 0px;
        margin-left: 0.4rem;
        color: #dfab00;
    }

    .rename-btn[disabled] {
        color: #93989c;
        cursor: not-allowed;
    }

    .btn-edit {
        margin-left: 0.4rem;
    }
</style>
