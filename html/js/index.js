

let aboutDiv = document.querySelector(".about-container");

let p = document.querySelector(".text-content");

let texts = [
    "Php Developer",
    "Web Developer",
    "Java and Spring Boot Dev"
];

let textIndex = 0;
let charIndex = 0;

function typeText() {
    if (charIndex < texts[textIndex].length) {
        p.textContent += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 100); 
    } else {
        setTimeout(() => {
            eraseText();
        }, 1000);
    }
}

function eraseText() {
    if (charIndex > 0) {
        p.textContent= texts[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseText, 50);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(typeText, 200);
    }
}

typeText();