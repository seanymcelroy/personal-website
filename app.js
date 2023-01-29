"strict";

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

let i = 0;
let txt = 'text-hacker-green'; /* The text */
let speed = 100; /* The speed/duration of the effect in milliseconds */
setTimeout(typeWriter, 2000);
setTimeout(displayGreen, 3000+speed*txt.length);
setTimeout(displayBlue, 5000+speed*txt.length);

console.log(speed*txt.length)

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("programmer-text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

function displayGreen(){
    document.getElementById("programmer-green").classList.add("code-green")
}
function displayBlue(){
    document.getElementById("mcelroy").classList.add("blue")
}

