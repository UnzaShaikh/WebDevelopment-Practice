let body = document.body;
console.log(body);
let btn = document.querySelector('.btn');
let innertext = document.querySelector('.inner-text-light');
let headingtext = document.querySelector('.heading-text-light');
let sun = document.querySelector('.sun');
let moon = document.querySelector('.moon');

btn.addEventListener('click', () => {
    body.classList.toggle("bodydark")
    btn.classList.toggle("dark");
    innertext.classList.toggle("inner-text-dark");
    headingtext.classList.toggle("heading-text-dark");
    sun.classList.toggle("off");
    moon.classList.toggle("on");
})