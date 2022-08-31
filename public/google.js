const SSR = typeof window === "undefined";
if (SSR) {

} else 
{
    console.log("loading analytics..")
    window.dataLayer = window.dataLayer || [];
    function gtag(){
        (window.dataLayer).push(arguments)
    }
    gtag("js", new Date());
    gtag('config', 'G-83EMYWNDG1');
}