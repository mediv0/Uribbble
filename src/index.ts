import { injectComments } from "./helpers";

if (document.querySelector(".non-overlay")) {
        // if user open shot page directly we dont need to observe the page
        injectComments();
} else {
        const callback: MutationCallback = function (mutationsList, _observer) {
                // Use traditional 'for loops' for IE 11
                for (let i = 0; i < mutationsList.length; i++) {
                        // we check if comment section is fully loaded, we inject our comments
                        // this will cause layout shift in the page ( PERFORMANCE ISSUE )
                        if (
                                mutationsList[i].target.nodeName ===
                                        "TEXTAREA" &&
                                mutationsList[i].attributeName ===
                                        "data-tribute"
                        ) {
                                injectComments();
                                break;
                        }
                }
        };

        // Create an observer instance linked to the callback function
        const observer = new MutationObserver(callback);
        const config = { attributes: true, childList: true, subtree: true };
        observer.observe(document.body, config);
}
