/*============================================

Santosh Mitra Portfolio

============================================*/



/*=============================

Typing Effect

=============================*/

const words = [

    "Performance Marketing Specialist",

    "Meta Ads Expert",

    "Google Ads Specialist",

    "GA4 & GTM Expert",

    "Landing Page Developer"

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.querySelector(".typing");

function typeEffect(){

    if(!typing) return;

    const current = words[wordIndex];

    if(!deleting){

        typing.textContent = current.substring(0,charIndex++);

        if(charIndex > current.length){

            deleting = true;

            setTimeout(typeEffect,1800);

            return;

        }

    }

    else{

        typing.textContent = current.substring(0,charIndex--);

        if(charIndex < 0){

            deleting = false;

            wordIndex++;

            if(wordIndex>=words.length){

                wordIndex=0;

            }

        }

    }

    setTimeout(typeEffect,deleting?40:80);

}

typeEffect();



/*=============================

Animated Counter

=============================*/

const counters=document.querySelectorAll(".counter");

const speed=200;

counters.forEach(counter=>{

const update=()=>{

const target=+counter.getAttribute("data-target");

const count=+counter.innerText;

const inc=target/speed;

if(count<target){

counter.innerText=Math.ceil(count+inc);

requestAnimationFrame(update);

}

else{

counter.innerText=target+"+";

}

}

update();

});



/*=============================

Sticky Navbar

=============================*/

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

header.classList.toggle("sticky",window.scrollY>80);

});



/*=============================

Smooth Scroll

=============================*/

document.querySelectorAll("nav a").forEach(link=>{

link.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

target.scrollIntoView({

behavior:"smooth"

});

const nav=document.querySelector("nav");

if(nav && nav.classList.contains("mobile-active")){

nav.classList.remove("mobile-active");

}

});

});

const menuBtn=document.querySelector(".menu-btn");

const nav=document.querySelector("nav");

if(menuBtn && nav){

menuBtn.addEventListener("click",()=>{

nav.classList.toggle("mobile-active");

});

}



/*=============================

Reveal Animation

=============================*/

const reveals=document.querySelectorAll(

".achievement-card,.highlight-card,.project-card,.tool-card,.service-card,.creative-card,.gallery-item,.timeline-item"

);

function reveal(){

reveals.forEach(card=>{

const top=card.getBoundingClientRect().top;

const windowHeight=window.innerHeight;

if(top<windowHeight-100){

card.classList.add("active");

}

});

}

window.addEventListener("scroll",reveal);

reveal();



/*=============================

Image Lightbox

=============================*/

document.body.addEventListener("click", event => {

const img = event.target.closest("img");

if(!img || img.closest('.hero')) return;

const light = document.createElement("div");

light.className = "lightbox";

light.innerHTML = `<div class="lightbox-content"><button class="lightbox-close" aria-label="Close">×</button><img src="${img.src}" alt="${img.alt || 'Preview'}"></div>`;

document.body.appendChild(light);

const closeButton = light.querySelector('.lightbox-close');

closeButton.addEventListener('click', event => {

event.stopPropagation();

light.remove();

});

light.addEventListener('click', () => {

light.remove();

});

});



/*=============================

Contact Form

=============================*/

const form=document.querySelector(".contact-form");

if(form){

form.addEventListener("submit",e=>{

e.preventDefault();

alert("Thank you! Your message has been received.");

form.reset();

});

}



/*=============================

Active Menu

=============================*/

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(sec=>{

const top=window.scrollY;

const offset=sec.offsetTop-200;

const height=sec.offsetHeight;

if(top>=offset && top<offset+height){

current=sec.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});