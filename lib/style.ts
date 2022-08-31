export default function setStylesheet(css) {
    const SSR = typeof window === "undefined";
    if (SSR) {
        return "";
    }
    document.body.style.backgroundColor = "black"
}