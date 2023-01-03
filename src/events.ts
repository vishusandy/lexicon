


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

export function escapePressed(e: KeyboardEvent): boolean {
    if (e.code == 'Escape' && e.target) {
        (<HTMLInputElement>e.target).blur();
        return true;
    }
    return false;
}

export function removeMarks(s: string): string {
    return s.replace(/<\/?mark>/, '');
}
