export default function setStylesheet(css) {
    const SSR = typeof window === "undefined";
    if (SSR) {
        return "";
    }
    var head = document.head || document.getElementsByTagName('head')[0]
    var style = document.createElement('style');

    head.appendChild(style);

    style.type = 'text/css';
    style.appendChild(document.createTextNode(css));
}