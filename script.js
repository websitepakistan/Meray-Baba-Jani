// ==========================
// MY HERO - SCRIPT.JS
// ==========================

// Floating Golden Hearts
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💛";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (18 + Math.random() * 20) + "px";
    heart.style.animationDuration = (5 + Math.random() * 5) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);
}

setInterval(createHeart, 500);

// Scroll Fade Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
});

document.querySelectorAll("section, .card, .message, img").forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "all 1s ease";
    observer.observe(el);
});

// Gallery Click Animation
document.querySelectorAll(".gallery-grid img").forEach(img => {

    img.addEventListener("click", () => {

        img.style.transform = "scale(1.15)";

        setTimeout(() => {
            img.style.transform = "scale(1)";
        }, 400);

    });

});

// Ending Surprise
window.addEventListener("scroll", () => {

    const ending = document.querySelector(".ending");

    if (!ending) return;

    const rect = ending.getBoundingClientRect();

    if (rect.top < window.innerHeight - 100) {

        ending.style.boxShadow = "0 0 50px gold";

    }

});

// Golden Sparkles
function sparkle() {

    const star = document.createElement("div");

    star.innerHTML = "✨";

    star.style.position = "fixed";
    star.style.left = Math.random() * window.innerWidth + "px";
    star.style.top = Math.random() * window.innerHeight + "px";
    star.style.fontSize = (10 + Math.random() * 18) + "px";
    star.style.pointerEvents = "none";
    star.style.opacity = "1";
    star.style.transition = "2s";

    document.body.appendChild(star);

    setTimeout(() => {
        star.style.opacity = "0";
        star.style.transform = "translateY(-30px)";
    }, 100);

    setTimeout(() => {
        star.remove();
    }, 2200);

}

setInterval(sparkle, 700);

// Welcome Message
window.onload = () => {

    setTimeout(() => {

        alert(
`❤️ Welcome ❤️

This website is lovingly dedicated to

Azhar Abbas Khan

The World's Best Father

Made with endless love by his son.`
        );

    }, 800);

};
