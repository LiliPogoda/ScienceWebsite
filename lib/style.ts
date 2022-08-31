export function setBackgroundColor(color) {
    const SSR = typeof window === "undefined";
    if (SSR) {
        return "";
    }
    document.body.style.backgroundColor = color
}