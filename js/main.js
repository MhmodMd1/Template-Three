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


let nums = document.querySelectorAll(".stats .number")
let statsSection = document.querySelector(".stats");
let started = false // Function Started ? No

window.onscroll = function () {
    if (window.scrollY >= statsSection.offsetTop - 300) {
        if (!started) {
            nums.forEach((num) => startCount(num))
        }
        started = true
    }
}

function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count)
        }
    }, 2000 / goal)
}
console.log(statsSection)