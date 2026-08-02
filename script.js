const button = document.getElementById("showMessage");
const message = document.getElementById("message");

// Show message when button is clicked
button.addEventListener("click", () => {

    message.style.display = "block";

    message.scrollIntoView({
        behavior: "smooth"
    });

    createConfetti();

});

// Floating Hearts
const heartsContainer = document.querySelector(".hearts");

function createHeart(){

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left = Math.random()*100 + "vw";

    heart.style.fontSize = (20 + Math.random()*30) + "px";

    heart.style.animationDuration = (5 + Math.random()*5) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },10000);

}

setInterval(createHeart,400);

// Confetti
function createConfetti(){

    for(let i=0;i<120;i++){

        const confetti=document.createElement("div");

        confetti.style.position="fixed";
        confetti.style.width="10px";
        confetti.style.height="10px";
        confetti.style.left=Math.random()*100+"vw";
        confetti.style.top="-20px";
        confetti.style.background=`hsl(${Math.random()*360},100%,60%)`;
        confetti.style.borderRadius="50%";
        confetti.style.pointerEvents="none";
        confetti.style.zIndex="9999";

        document.body.appendChild(confetti);

        let y=0;

        const fall=setInterval(()=>{

            y+=6;

            confetti.style.top=y+"px";

            confetti.style.transform=`rotate(${y*4}deg)`;

            if(y>window.innerHeight){

                clearInterval(fall);

                confetti.remove();

            }

        },15);

    }

}

// Glowing title animation
const title = document.querySelector("h1");

setInterval(()=>{

    title.style.textShadow =
    `0 0 ${20+Math.random()*20}px rgba(255,255,255,.9)`;

},800);

// Button pulse animation
setInterval(()=>{

    button.animate([
        {transform:"scale(1)"},
        {transform:"scale(1.08)"},
        {transform:"scale(1)"}
    ],{
        duration:1200
    });

},2500);

const enterBtn = document.getElementById("enterBtn");
const welcomeScreen = document.getElementById("welcome-screen");

enterBtn.addEventListener("click", () => {

    welcomeScreen.classList.add("fadeOut");

});
