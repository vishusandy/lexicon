<script lang="ts">
    import { browser } from '$app/environment';
    import { createEventDispatcher } from 'svelte';

    import { isWordList, type BackupEntry } from '../types';
    import { download_json, list_get } from '../words';
    import Alert from './Alert.svelte';
    import Modal from './Modal.svelte';

    const dispatch = createEventDispatcher();
    export let key: string;

    export let backups: BackupEntry[];

    let alert: string | undefined = undefined;
    let alert_type: string | undefined = undefined;

    // restore modal
    let new_name: string = '';
    let rename_cur: boolean = true;

    // rename modal
    let rename_str: string = '';

    function refresh() {
        dispatch('refreshlist', true);
    }

    function validBackupName(e: Event, input_id: string): boolean {
        const t = <HTMLInputElement | null>document.getElementById(input_id);
        if (!t) {
            return false;
        }

        if (t.value != '') {
            t.setCustomValidity('');

            if (browser) {
                const ls = localStorage.getItem(t.value.toLowerCase());

                if (t.value.toLowerCase() == key.toLowerCase()) {
                    t.setCustomValidity(`'${key}' is a reserved name`);
                } else if (ls != null) {
                    t.setCustomValidity('Backup exists');
                } else {
                    return true;
                }
            }
        }
        return false;
    }

    function submitRename(d: HTMLDialogElement, e: Event): boolean {
        if (!validBackupName(e, key + '-rename-backup')) {
            console.log('invalid name:' + rename_str);
            e.preventDefault();
            return false;
        }

        const h = <HTMLInputElement | null>document.getElementById(key + '-rename-hidden');
        const new_name = rename_str.toLowerCase();
        const new_ls = localStorage.getItem(new_name);

        if (!h || !h.value || !rename_str || new_ls != null) return false;

        const old_name = h.value.toLowerCase();
        const old_ls = localStorage.getItem(old_name);

        if (!old_ls) return false;

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

            alert = 'Backup restored';
            alert_type = 'info';

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

        alert = 'Backup created';
        alert_type = 'info';

        refresh();

        t.value = '';
    }

    function submitUpload(e: Event) {
        if (!browser) return;

        e.preventDefault();
        let el = <HTMLInputElement | null>document.getElementById(`${key}-upload-backup`);

        if (!el || !el.files || !el.files[0]) {
            alert = 'Please select a file';
            alert_type = 'error';
            return;
        }

        if (!window.confirm('This will overwrite the current word list, continue?')) return;

        const reader = new FileReader();
        reader.onload = (e: ProgressEvent) => {
            if (!reader.result) {
                alert = 'Upload failed';
                alert_type = 'error';
                return;
            }

            let text = <string>reader.result;
            let obj = JSON.parse(text);

            if (!isWordList(obj)) {
                alert = 'Invalid backup file.';
                alert_type = 'error';
                return;
            }

            localStorage.setItem(key, text);
            alert = 'Backup restored';
            alert_type = 'info';

            let el = <HTMLInputElement | null>document.getElementById(`${key}-upload-backup`);
            if (el) {
                el.value = '';
            }

            refresh();
        };

        reader.readAsText(el.files[0]);
    }

    function openRestoreModal(e: Event) {
        const t = <HTMLDialogElement | null>document.getElementById('backup-modal');
        if (!t) return;

        const el = document.getElementById(`${key}-backup-list-form`);
        if (el && el.querySelectorAll('input[name="btn-edit"]:checked').length === 0) {
            return;
        }

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
        if (!browser) return false;
        if (!window.confirm("Delete backup '" + name + "'?")) {
            return false;
        }

        alert = 'Backup deleted';
        alert_type = 'error';

        localStorage.removeItem(name);
        refresh();
        return true;
    }
</script>

<h2 class="options-group-title" id="create-backup">Backups</h2>
<div class="options-group">
    <div class="backup-group">
        <h3 class="options-group-title" id="create-backup">Create Backup</h3>
        <form on:submit={submitNewBackup}>
            <div class="new-backup">
                <input
                    id="{key}-new-backup-name"
                    type="text"
                    class="new-backup-name form-control"
                    placeholder="new name"
                    on:blur={(e) => validBackupName(e, key + '-new-backup-name')}
                />
                <button class="create-backup btn btn-primary">Create Backup</button>
            </div>
        </form>
    </div>
    <!-- </div>

<div class="options-group"> -->
    <div class="backup-group">
        <h3 class="options-group-title" id="backups">Restore Backup</h3>
        <form id="{key}-backup-list-form">
            {#each backups as backup (backup.key)}
                <div class="backup-entry">
                    <div class="backup-content">
                        {#if backup.name != key}
                            <button
                                type="button"
                                class="remove-btn"
                                title="Delete backup"
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
                            class="btn download-btn"
                            title="Download backup"><i class="fa-solid fa-download" /></button
                        >
                        {#if backup.name != key}
                            <button
                                on:click={(e) => openRenameModal(e, backup.name)}
                                type="submit"
                                id="{key}-backup-rename-{backup.name}"
                                title="Rename"
                                value={backup.name}
                                class="btn rename-btn"><i class="fa-solid fa-pen" /></button
                            >
                            <input
                                type="radio"
                                name="btn-edit"
                                class="btn-edit"
                                title="Select this backup for restore"
                                id="{key}-restore-{backup.key}"
                                required={true}
                                value={backup.name}
                            />
                        {:else}
                            <button type="button" disabled={true} class="btn rename-btn"
                                ><i class="fa-solid fa-pen" /></button
                            >
                            <input type="radio" class="btn-edit-current" disabled />
                        {/if}

                        <div class="backup-name">
                            <label
                                class="backup-name-label"
                                for="{key}-restore-{backup.key}"
                                title="Select backup for restore"
                            >
                                {#if backup.name == key}
                                    <div class="backup-current">Current</div>
                                {:else}
                                    {backup.name}
                                {/if}
                            </label>
                            <div class="backup-length">
                                ({backup.size} words)
                            </div>
                        </div>
                    </div>
                </div>
            {/each}
            <div class="backup-submit">
                <button
                    on:click={openRestoreModal}
                    type="button"
                    class="btn btn-danger"
                    name="backups_action"
                    value="restore">Restore</button
                >
            </div>
        </form>
    </div>
    <!-- </div>

<h2 class="options-group-title" id="upload-backup">Upload Backup</h2>
<div class="options-group"> -->
    <div class="backup-group">
        <h3 class="options-group-title" id="upload-backup">Upload Backup</h3>
        <form on:submit={(e) => submitUpload(e)}>
            <div class="new-backup">
                <input
                    id="{key}-upload-backup"
                    class="upload-backup form-control"
                    type="file"
                    accept=".json,application/json"
                />
                <button class="btn btn-danger upload-backup-btn">Restore Backup</button>
            </div>
        </form>
    </div>
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

{#if alert}
    {#if alert_type != undefined}
        <Alert bind:message={alert} alert_style={alert_type} />
    {:else}
        <Alert bind:message={alert} />
    {/if}
{/if}

<style>
    .backup-group {
        border-radius: 0.4rem;
        border: 1px solid #4f5058;
        background: #3d3e44;
        padding: 1rem 0.4rem;
        margin: -0.7rem;
    }

    .backup-group:not(:last-of-type) {
        margin-bottom: 1.8rem;
    }

    .backup-group form {
        margin-left: 2rem;
        margin-right: 2rem;
    }

    .backup-group h3 {
        color: #ebeef1;
        margin-top: 0px;
        margin-bottom: 0.8rem;
    }

    .dialog-title {
        font-size: 1.1rem;
        margin-bottom: 1rem;
    }

    .new-backup {
        display: flex;
        flex-wrap: wrap;
        row-gap: 0.7rem;
        column-gap: 0.5rem;
        justify-content: center;
    }

    .new-backup-name {
        width: 100%;
        flex-basis: 40%;
        flex-grow: 1;
        min-width: 65%;
    }

    .create-backup {
        flex-shrink: 0;
    }

    .backup-entry {
        margin: 0.25rem 0px;
    }

    .backup-content {
        padding: 0.2rem 0rem;
        display: flex;
        flex-wrap: nowrap;
    }

    .backup-name {
        flex-grow: 1;
    }

    .backup-length {
        display: inline;
        font-size: 0.9rem;
        font-style: italic;
        color: #a1abb4;
    }

    .backup-name-label {
        padding-left: 0.35rem;
    }

    .backup-submit {
        margin-top: 0.5rem;
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
        color: #ee1d1d;
    }
    .remove-btn[disabled] {
        color: #9a9a9d;
    }

    .download-btn {
        padding: 0px;
        margin-left: 0.4rem;
        color: #0099ff;
    }

    .rename-btn {
        padding: 0px;
        margin-left: 0.4rem;
        color: #ffc400;
    }

    .rename-btn[disabled] {
        color: #9a9a9d;
        cursor: not-allowed;
    }

    .btn-edit {
        margin-left: 0.4rem;
    }

    .btn-edit-current {
        margin-left: 0.4rem;
        cursor: not-allowed;
    }

    .backup-current {
        font-weight: bold;
    }

    .upload-backup-btn {
        flex-shrink: 0;
    }

    .upload-backup {
        border: 0px;
        background: transparent;
        color: #e9ecf1;
        padding: 0px;
        min-width: 8rem;
        width: 100%;
        flex-basis: 40%;
        flex-grow: 1;
        min-width: 65%;
    }

    .upload-backup::file-selector-button {
        --bs-btn-bg: #d1d1d1;
        --bs-btn-color: #212122;
        --bs-btn-border-color: transparent;
        --bs-btn-padding-x: 0.75rem;
        --bs-btn-padding-y: 0.3rem;
        --bs-btn-font-size: 1rem;
        --bs-btn-border-width: 1px;
        --bs-btn-font-weight: 400;
        --bs-btn-line-height: 1.5;
        --bs-btn-border-radius: 0.375rem;
        --bs-btn-hover-border-color: transparent;
        --bs-btn-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075);
        --bs-btn-disabled-opacity: 0.65;
        --bs-btn-focus-box-shadow: 0 0 0 0.25rem rgba(var(--bs-btn-focus-shadow-rgb), 0.5);

        background: var(--bs-btn-bg);
        display: inline-block;
        padding: var(--bs-btn-padding-y) var(--bs-btn-padding-x);
        font-family: var(--bs-btn-font-family);
        font-size: var(--bs-btn-font-size);
        font-weight: var(--bs-btn-font-weight);
        line-height: var(--bs-btn-line-height);
        color: var(--bs-btn-color);
        text-align: center;
        text-decoration: none;
        vertical-align: middle;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
        border: var(--bs-btn-border-width) solid var(--bs-btn-border-color);
        border-radius: var(--bs-btn-border-radius);
        transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
            border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    }
</style>
