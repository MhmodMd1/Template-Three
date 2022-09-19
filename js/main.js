console.log("hello world")



let progressSpans = document.querySelectorAll(".progress span");
let section = document.querySelector(".our-skills");

window.onscroll = function () {
    // Skills Animate Width
    if (window.scrollY >= section.offsetTop - 250) {
        progressSpans.forEach((span) => {
            span.style.width = span.dataset.width;
        });
    }
}
