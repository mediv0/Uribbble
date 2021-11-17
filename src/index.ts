import { injectComments } from "./helpers";

const callback: MutationCallback = function (mutationsList, observer) {
        // Use traditional 'for loops' for IE 11
        for (let i = 0; i < mutationsList.length; i++) {
                // we check if comment section is fully loaded, we inject our comments
                // this will cause layout shift in the page ( PERFORMANCE ISSUE )
                if (
                        (mutationsList[i].target as HTMLDivElement)
                                .className === "sidebar-scrolling-container" &&
                        (mutationsList[i].addedNodes[0] as HTMLDivElement)
                                .className === "shot-sidebar-contents"
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
