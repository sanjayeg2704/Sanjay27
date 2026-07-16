// ==========================================================
// ELEMENTS
// ==========================================================

const loader = document.getElementById("loader");

const welcome = document.getElementById("welcome");

const mainContent = document.getElementById("mainContent");

const startBtn = document.getElementById("startBtn");

const blowBtn = document.getElementById("blowBtn");

const giftBtn = document.getElementById("giftBtn");

const giftMessage = document.getElementById("giftMessage");

const birthdayCake = document.getElementById("birthdayCake");

const topBtn = document.getElementById("topBtn");

const birthdayMusic = document.getElementById("birthdayMusic");

const flames = [

document.getElementById("flame1"),

document.getElementById("flame2"),

document.getElementById("flame3")

];

const smokes = [

document.getElementById("smoke1"),

document.getElementById("smoke2"),

document.getElementById("smoke3")

];


// ==========================================================
// LOADER
// ==========================================================

window.addEventListener("load", () => {

setTimeout(()=>{

loader.style.opacity="0";

setTimeout(()=>{

loader.style.display="none";

},1000);

},2200);

});



// ==========================================================
// LETTER
// ==========================================================

const letter =

`🎁 **For My Dearest Sister** ❤️

Happy Birthday, Thangachi.. ! 🎂✨

Life la evlo busy aanalum, nee eppovum enakku romba special. Un smile paatha dhaan  happiness irukura madhiri feel aagum.

Indha pudhu varusham unakku neraya santhosham, nalla health, success, peace of mind, and unforgettable memories kondu varanum. Un dream ellam one by one nijamaaganum.

Namma rendu perum sandai potta moments nu onnum perusa illa😂, siricha moments irukku, aana edhu nadandhalum nee eppovum en favourite sister dhaan. ❤️

Thank you for always being there. Unakku enna venumnalum, un Annan eppovum un pakkathula iruppan.

Once again...

🎉 **Happy Birthday, Kuttychathan!** 🎉

**Stay happy... Stay blessed... Keep smiling...**

**Love You Always! ❤️**
Miss u Always... 😘
— Unnoda Annan
Apram nerla cake vangi vetta mudila so keela cake iruku wish pannitu oothiru`;

let letterIndex = 0;

const typeText = document.getElementById("typeText");

function typeWriter(){

if(letterIndex < letter.length){

typeText.innerHTML += letter.charAt(letterIndex);

letterIndex++;

setTimeout(typeWriter,35);

}

}

// ==========================================================
// START BUTTON
// ==========================================================

async function startBirthdayMusic() {
    if (!birthdayMusic) return;

    try {
        birthdayMusic.currentTime = 0;
        birthdayMusic.volume = 0.7;
        await birthdayMusic.play();
    } catch (error) {
        // Browsers may block playback until the user interacts.
    }
}

startBtn.addEventListener("click",()=>{

startBirthdayMusic();

welcome.style.opacity="0";

setTimeout(()=>{

welcome.style.display="none";

mainContent.style.display="block";

typeWriter();

launchConfetti();

setTimeout(fireworks,600);

window.scrollTo({

top:0,

behavior:"smooth"

});

},700);

});

document.addEventListener("pointerdown", startBirthdayMusic, { once: true });
document.addEventListener("keydown", startBirthdayMusic, { once: true });

// ==========================================================
// BLOW CANDLES
// ==========================================================

let candlesBlown = false;

blowBtn.addEventListener("click", () => {

    if (candlesBlown) return;

    candlesBlown = true;

    // Shrink flames naturally
    flames.forEach((flame, index) => {

        setTimeout(() => {

            flame.style.transition =
                "transform .95s ease-out, opacity .95s ease-out";

            flame.style.transform = "scale(0.15) rotate(18deg)";

            flame.style.opacity = "0";

        }, index * 220);

    });

    // Smoke animation
    smokes.forEach((smoke, index) => {

        setTimeout(() => {

            smoke.classList.add("show");

        }, 700 + (index * 240));

    });

    // Cake Glow
    setTimeout(() => {

        birthdayCake.classList.add("glow");

    }, 900);

    // Celebration
    setTimeout(() => {

        const cakeRect = birthdayCake.getBoundingClientRect();

        emitBurst(

            cakeRect.left + cakeRect.width / 2,

            cakeRect.top + cakeRect.height / 3,

            44

        );

        launchConfetti();

        fireworks();

    }, 1200);

    // Enable Gift Button
    setTimeout(() => {

        giftBtn.disabled = false;

        giftBtn.style.opacity = "1";

        giftBtn.style.cursor = "pointer";

    }, 1500);

});

// ==========================================================
// CONFETTI
// ==========================================================

function emitBurst(x, y, count = 24) {

    const colors = ["#ffd54f", "#ff7b00", "#14d88d", "#ff4d8d", "#ffffff", "#7fe7ff"];

    for (let i = 0; i < count; i++) {

        const piece = document.createElement("span");

        piece.className = "burstPiece";

        piece.style.left = `${x}px`;

        piece.style.top = `${y}px`;

        piece.style.background = colors[i % colors.length];

        piece.style.setProperty("--tx", `${(Math.random() - 0.5) * 220}px`);

        piece.style.setProperty("--ty", `${(Math.random() - 0.5) * 220 - 40}px`);

        piece.style.setProperty("--rot", `${Math.random() * 360}deg`);

        piece.style.animationDuration = `${0.75 + Math.random() * 0.25}s`;

        document.body.appendChild(piece);

        setTimeout(() => piece.remove(), 1100);

    }

}

function launchConfetti() {

    const confettiFn = typeof window.confetti === "function" ? window.confetti : null;

    const cakeRect = birthdayCake.getBoundingClientRect();

    const x = cakeRect.left + cakeRect.width / 2;

    const y = cakeRect.top + cakeRect.height / 2;

    emitBurst(x, y, 36);

    if (confettiFn) {

        confettiFn({

            particleCount:220,

            spread:120,

            origin:{
                y:0.6
            }

        });

    }

}

// ==========================================================
// FIREWORKS
// ==========================================================

function fireworks(){

    const duration = 5000;

    const end = Date.now() + duration;

    const confettiFn = typeof window.confetti === "function" ? window.confetti : null;

    const timer = setInterval(function(){

        if(Date.now() > end){

            clearInterval(timer);

            return;

        }

        const burstX = window.innerWidth * Math.random();

        const burstY = window.innerHeight * 0.2 + Math.random() * 120;

        emitBurst(burstX, burstY, 10);

        if (confettiFn) {

            confettiFn({

                particleCount:10,

                angle:60,

                spread:60,

                origin:{
                    x:0
                }

            });

            confettiFn({

                particleCount:10,

                angle:120,

                spread:60,

                origin:{
                    x:1
                }

            });

            confettiFn({

                particleCount:15,

                spread:100,

                origin:{
                    x:Math.random(),
                    y:Math.random()*0.5
                }

            });

        }

    },250);

}
// ==========================================================
// GIFT OPENING
// ==========================================================

let giftOpened = false;

giftBtn.addEventListener("click", async () => {

    const giftLid = document.getElementById("giftLid");

    if (giftLid) {
        giftLid.style.transform =
            "rotate(-22deg) translate(-15px,-12px)";
    }

    giftMessage.innerHTML = `
        <img id="giftImage" src="assets/gift-image.svg" alt="Birthday surprise" />
        <p style="margin:18px auto 0; color:#fff8d6; font-size:22px; font-weight:600; text-align:center; line-height:1.6; letter-spacing:0.5px; text-shadow:0 2px 10px rgba(0,0,0,0.35);">
            Once again Happy birthday Thangachi
        </p>
    `;

    const giftImage = document.getElementById("giftImage");
    if (giftImage) {
        giftImage.onload = () => {
            giftMessage.classList.add("show");
        };
        giftImage.onerror = () => {
            giftImage.src = "assets/gift-image.svg";
        };
    }

    giftMessage.classList.add("show");

    document.getElementById("giftSVG").classList.add("hideGift");
    const btn = document.getElementById("giftBtn");
    if(btn){
        btn.classList.add("hideGift");
        btn.style.opacity = "";
        btn.style.cursor = "";
        btn.disabled = true;
    }

    launchConfetti();
    fireworks();

});

// ==========================================================
// SPARKLES
// ==========================================================

function createSparkles(){

const gift=document.getElementById("giftBox");

for(let i=0;i<25;i++){

const s=document.createElement("div");

s.className="sparkle";

s.style.left=(120+Math.random()*40)+"px";

s.style.top=(100+Math.random()*40)+"px";

s.style.setProperty("--x",(Math.random()*240-120)+"px");

s.style.setProperty("--y",(-Math.random()*220)+"px");

gift.appendChild(s);

setTimeout(()=>{

s.remove();

},1800);

}

}

// ==========================================================
// MUSIC
// ==========================================================

music.volume=0.35;

// ==========================================================
// SCROLL TO TOP
// ==========================================================

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.style.display="block";

}

else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

// ==========================================================
// SCROLL REVEAL
// ==========================================================

const revealItems=document.querySelectorAll(

".letterCard,.wishCard,.cakeSection,.giftSection,.finalSection"

);

function reveal(){

const trigger=window.innerHeight*0.85;

revealItems.forEach(item=>{

const top=item.getBoundingClientRect().top;

if(top<trigger){

item.classList.add("show");

}

});

}

window.addEventListener("scroll",reveal);

reveal();

// ==========================================================
// AUTO CONFETTI
// ==========================================================

setInterval(()=>{

const confettiFn = typeof window.confetti === "function" ? window.confetti : null;

emitBurst(

window.innerWidth * Math.random(),

window.innerHeight * 0.12 + Math.random() * 60,

8

);

if (confettiFn) {

confettiFn({

particleCount:8,

spread:45,

origin:{

x:Math.random(),

y:-0.1

}

});

}

},12000);

// ==========================================================
// END
// ==========================================================