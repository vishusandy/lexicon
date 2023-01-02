
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

export async function scrollToWord(key: string, id: number) {
    console.log('checking scroll');
    let word = document.getElementById(key + "-" + id);
    if (word) {
        const vis = await isVisible(word);
        word.classList.add('highlight');
        setTimeout(() => {
            word?.classList.remove('highlight');
        }, 3000);
        if (!vis) {
            word.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    }
}
