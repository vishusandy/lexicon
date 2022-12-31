export function enterPressed(e: KeyboardEvent) {
    if (e.code == 'Enter' || e.code == 'NumpadEnter' || e.code == 'Escape') {
        if (e.target) {
            let t = <HTMLElement>e.target;
            t.blur();
        }
        e.preventDefault();
        return;
    }
}

export function enterSpacePressed(e: KeyboardEvent) {
    if (e.code == 'Enter' || e.code == 'NumpadEnter' || e.code == 'Escape' || e.code == 'Space') {
        if (e.target) {
            let t = <HTMLElement>e.target;
            t.blur();
        }
        e.preventDefault();
        return;
    }
}
