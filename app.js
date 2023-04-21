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

let txt = 'text-hacker-green';
let speed = 100;

let blueText = ` class="text-blue"`;

function typeWriter(text, target, blinkerClass, callback) {
    let i = 0;
    const blinker = document.getElementsByClassName(blinkerClass)[0];
    blinker.classList.remove("hidden");
    blinker.classList.add("blinker-animate");
    function type() {
      if (i < text.length) {
        let char = text.charAt(i);
        let styledChar = '';
  
        if (target === 'programmer-text-2' && i < 6) {
          styledChar = `<span class="tag attr-name token">${char}</span>`;
        } else {
            styledChar = `</span><span class="tag attr-value token">${char}</span>`;
        }
  
        document.getElementById(target).innerHTML += styledChar;
        i++;
        setTimeout(type, speed);
      } else {
        blinker.classList.add("blinker-animate");
        setTimeout(()=>{
            blinker.classList.add("hidden");
            if (callback) {
                callback();
            }
        }, 2500)
    }
}

setTimeout(()=>
    {
        blinker.classList.remove("blinker-animate");
        type();
    }, 2000)
  }
  
  function displayGreen() {
    const programmerText = document.getElementById("programmer-green");
    programmerText.classList.remove("programmer-before");
    programmerText.classList.add("text-hacker-green");
    setTimeout(() => typeWriter(blueText, 'programmer-text-2', "blinker-blue", displayBlue), 2000);
  }
  
  function displayBlue() {
    document.getElementById("mcelroy").classList.add("blue");
  }
  
  setTimeout(() => typeWriter(txt, 'programmer-text', "blinker-green", displayGreen), 1000);
  

// Get elements
const card = document.querySelector(".card-body");
const modal = document.getElementById("myModal");
const closeBtn = document.querySelector(".close");

// Show modal when card is clicked
card.addEventListener("click", () => {
    console.log("HEKK")
  modal.style.display = "block";
});

// Hide modal when close button is clicked
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Hide modal when clicking outside of the modal content
window.addEventListener("click", (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

const projects = Array.from(document.getElementsByClassName('card'));
console.log(projects)

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if (entry.isIntersecting){
            entry.target.classList.add('show')
        }else{
            entry.target.classList.remove('show')
        }
    });
});

projects.forEach((proj)=>observer.observe(proj));

