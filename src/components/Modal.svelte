<script lang="ts">
    export let onClose: (t: HTMLDialogElement, e: Event) => void = () => {};
    export let onSubmit: (t: HTMLDialogElement, e: Event) => boolean;
    export let submit_text: string = 'Submit';
    export let cancel_text: string = 'Cancel';

    export let id: string;

    function close(e: Event) {
        const t = <HTMLDialogElement | null>document.getElementById(id);
        if (!t) return;
        onClose(t, e);
        reset(t);
        t.close();
    }

    function closed(e: Event) {
        const t = <HTMLDialogElement | null>document.getElementById(id);
        if (!t) return;
        onClose(t, e);
        reset(t);
    }

    function submit(e: Event) {
        const t = <HTMLDialogElement | null>document.getElementById(id);
        if (!t) {
            e.preventDefault();
            return;
        }
        if (onSubmit(t, e)) {
            // reset(t);
            t.close();
        } else {
            e.preventDefault();
        }
    }

    function reset(t: HTMLDialogElement) {
        t.querySelectorAll('form').forEach((f) => {
            f.reset();
        });
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<dialog class="modal" {id} on:click|self={close} on:close={closed}>
    <div class="modal-wrapper">
        <form method="dialog" on:submit={submit}>
            <slot />
            <div class="dialog-controls">
                <button type="submit" class="btn btn-primary">{submit_text}</button>
                <button type="button" on:click={close} class="btn btn-secondary"
                    >{cancel_text}</button
                >
            </div>
        </form>
    </div>
</dialog>

<style>
    dialog.modal {
        position: fixed;
        top: 20svh;
        padding: 0px;
        margin: 0px auto;
        max-width: 100vw;
        width: 450px;
        border-radius: 1.25rem;
        border: 2px solid #202225;
    }

    dialog.modal::backdrop {
        background-color: #2d2e30c4;
    }

    .modal-wrapper {
        padding: 1.5rem 1.5rem;
    }

    .dialog-controls {
        margin-top: 2rem;
        text-align: right;
    }
</style>
