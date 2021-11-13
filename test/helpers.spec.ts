import { generateTextNodes, injectComments, insertCommentContainer } from "../src/helpers"

describe("generate text nodes", () => {
    test("should generate a fragment of text nodes from given texts", () => {
        const comments = ["Nice Shot! 🥰", "Hott 🔥", "It's Amazing", "Clean design", "Great work", "Well done", "Perfect", "It's cool", "Looks cool", "Awesome", "Fantastic", "I love it", "Superb ", "So cute"];

        const frag = generateTextNodes();

        for(let i = 0; i < frag.childNodes.length; i++) {
            expect(frag.childNodes[i].textContent).toBe(comments[i]);
        }
    })
})

describe("insert commentor container", () => {
    test("should inject plugin container after dribbble form", () => {
        document.body.innerHTML = `
        <div id="test_parent_container">
            <input class="shot-comments-post" />
        </div>
    `;
        insertCommentContainer();

        const parent = document.getElementById("test_parent_container");
        expect(parent.innerHTML.toString().trim()).toBe(`<input class="shot-comments-post"><div class="commentor_wrapper"></div>`);
    })
})

describe("injectComments", () => {
    test("should inject comments into the DOM", () => {
        document.body.innerHTML = `
        <div id="test_parent_container">
            <input class="shot-comments-post" />
        </div>`;
        injectComments();

        const parent = document.querySelector(".commentor_wrapper");
        expect(parent.childNodes.length).toBe(14);
    });
});