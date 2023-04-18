"use strict";

let btn = document.getElementsByClassName("theme-switch")[0];
let moon = document.getElementById("moon_svg")
let sun = document.getElementById("sun_svg")
const body =document.body;

btn.onclick= ()=>{
    if (body.classList[0]=="dark"){
        body.classList.replace("dark", "light")
        sun.classList.add("hidden")
        moon.classList.remove("hidden")
    }else{
        body.classList.replace("light","dark")
        moon.classList.add("hidden")
        sun.classList.remove("hidden")

    }
}

let txt = 'text-hacker-green'; /* The text */
let speed = 100; /* The speed/duration of the effect in milliseconds */
setTimeout(() => typeWriter(txt, 'programmer-text'), 2000);
setTimeout(displayGreen, 3000+speed*txt.length);

let blueText=` class="text-blue"`
setTimeout(() => typeWriter(blueText, 'programmer-text-2'), 4000);
setTimeout(displayBlue, 5000+speed*blueText.length);

function typeWriter(text, target) {
    let i = 0;
    type(i, target, text);
}

function type(i, target, text){
    if (i < text.length) {
        document.getElementById(target).innerHTML += text.charAt(i);
        i++;
        setTimeout(() => type(i, target, text), speed);
    }
}

function displayGreen(){
    document.getElementById("programmer-green").classList.add("code-green")
}
function displayBlue(){
    document.getElementById("mcelroy").classList.add("blue")
}

