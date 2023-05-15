import { tick } from 'svelte';

export function maybeString(s: string): string | undefined {
    const trimmed: string = s.trim();
    return trimmed != '' ? trimmed : undefined;
}

export function toTitleCase(text: string) {
    //https://stackoverflow.com/a/4878800
    return text.replace(/\w\S*/g, function (match) {
        return match.charAt(0).toUpperCase() + match.substring(1).toLowerCase();
    });
}


function isVisible(domElement: HTMLElement) {
    return new Promise(resolve => {
        const o = new IntersectionObserver(([entry]) => {
            resolve(entry.intersectionRatio === 1);
            o.disconnect();
        });
        o.observe(domElement);
    });
}

async function scrollToElement(el: HTMLElement, id: number) {
    if (el) {
        const vis = await isVisible(el);
        el.classList.add('highlight');
        setTimeout(() => {
            el?.classList.remove('highlight');
        }, 3000);
        if (!vis) {
            el.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    }
}

export async function scrollToWord(id: number, key: string) {
    if (!Number.isNaN(id)) {
        await tick();
        const t = document.getElementById(key + "-" + id);
        if (t) {
            scrollToElement(t, id);
        }
    }
}

export function addMarks(s: string, search: string[]): string {
    for (let i = 0; i < search.length; i++) {
        const re = new RegExp(`(${search[i]})`, 'gi');
        s = s.replace(re, `<mark>$1</mark>`);
    }
    return s;
}

export function removeMarks(s: string): string {
    return s.replaceAll(/<\/?mark>/gi, '');
}

export function cur_date(): string {
    const time = new Date();
    return time.toISOString().split('T')[0];
}
