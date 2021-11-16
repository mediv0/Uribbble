import { injectComments } from "./helpers";

const callback: MutationCallback = function (mutationsList, observer) {
        // Use traditional 'for loops' for IE 11
        for (let i = 0; i < mutationsList.length; i++) {
                // we check if comment section is fully loaded, we inject our comments
                // this will cause layout shift in the page ( PERFORMANCE ISSUE )
                if (
                        mutationsList[i].previousSibling &&
                        (mutationsList[i].previousSibling as HTMLDivElement)
                                .className === "shot-comments-list"
                ) {
                        injectComments();
                        break;
                }
        }
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);
const config = { attributes: false, childList: true, subtree: true };
observer.observe(document.body, config);
