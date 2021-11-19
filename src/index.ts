import { injectComments, observer } from "./helpers";

// check if we are in shot page
const shotPage = document.querySelector(".non-overlay") as HTMLDivElement;
if (shotPage) {
        document.onreadystatechange = () => {
                if (document.readyState === "complete") {
                        // if sidebar is open, we have to manually inject the component then observer for future changes
                        document.querySelector(".sidebar-open") &&
                                injectComments();
                        observer(shotPage);
                }
        };
} else {
        observer(document.querySelector(".shot-overlay"));
}
