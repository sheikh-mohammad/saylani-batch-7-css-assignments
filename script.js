let navbar = document.querySelector("nav");
let fixedTop = document.querySelector(".top-icon")

let playBtn = document.querySelector(".video-section .play-btn");
let videoHeading = document.querySelector(".video-section h2");
let videoBtn = document.querySelector(".video-section button");

document.addEventListener("scroll", function () {
    navbar.classList.toggle("fixed-nav", window.scrollY > 200);
    fixedTop.classList.toggle("fixed-icon-top", window.scrollY > 200);
})

let runned = false;

document.addEventListener("scroll", () => {
    if (runned == false && window.scrollY >= 2800) {
        runned = true;
        let counter1 = document.querySelector("#counter-1");
        let counter2 = document.querySelector("#counter-2");
        let counter3 = document.querySelector("#counter-3");

        let count1 = 1;
        let count2 = 1;
        let count3 = 1;

        let interval1 = setInterval(() => {
            counter1.innerText = `${count1} +`;
            count1++;
            if (count1 > 2500) {
                clearInterval(interval1);
            }
        }, 1);

        let interval2 = setInterval(() => {
            counter2.innerText = `${count2} +`;
            count2++;
            if (count2 > 350) {
                clearInterval(interval2);
            }
        }, 28);

        let interval3 = setInterval(() => {
            counter3.innerText = `${count3} +`;
            count3++;
            if (count3 > 20) {
                clearInterval(interval3);
            }
        }, 500);
    }
})

let toggler = document.querySelector(".toggler");
let toggleBar = document.querySelector(".menu ul");

toggler.addEventListener("click", () => {
    toggleBar.classList.toggle("hidden");
})

let inp = document.querySelector(".subscription-col input");

inp.addEventListener("focus", function () {
    this.placeholder = "";
})

inp.addEventListener("blur", function () {
    this.placeholder = "Email Address";

})

