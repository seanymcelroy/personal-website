"use strict";

// DOMContentLoaded event ensures that the script runs after the entire DOM has been loaded.
document.addEventListener('DOMContentLoaded', function() {
  const body =document.body;

  const themeSwitchBtn = document.getElementsByClassName("theme-switch")[0];
  const moon = document.getElementById("moon_svg")
  const sun = document.getElementById("sun_svg")

  // Apply the theme at the start
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.className = savedTheme;
    if (savedTheme == 'dark') {
        sun.classList.add("hidden");
        moon.classList.remove("hidden");
    } else {
        moon.classList.add("hidden");
        sun.classList.remove("hidden");
    }
}

themeSwitchBtn.onclick = () => {
    if (body.classList[0] == "dark") {
        body.classList.replace("dark", "light");
        sun.classList.add("hidden");
        moon.classList.remove("hidden");
        localStorage.setItem('theme', 'light');  // Save the theme
    } else {
        body.classList.replace("light", "dark");
        moon.classList.add("hidden");
        sun.classList.remove("hidden");
        localStorage.setItem('theme', 'dark');  // Save the theme
    }
}

  const iAmText = document.getElementById("iAmText");
  const mcelroy = document.getElementById("mcelroy");
  

  const hackerGreenText = 'text-hacker-green';
  const blueText1 = ' class';
  const blueText2 = '="text-blue"';
  const greenBlinker = document.getElementById("blinker-green");
  const blueBlinker = document.getElementById("blinker-blue");
  const blinkerThree = document.getElementById("blinker-three");

  const programmerText = document.getElementById('programmer-text');
  const programmerText2 = document.getElementById('programmer-text-2');
  const programmerText3 = document.getElementById('programmer-text-3');

  const text3 = ' class';
  const text4 = '="align-left"'; 
  let speed = 100;

  function freeze(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  

  async function selfCode(){
    greenBlinker.classList.remove("hidden");
    greenBlinker.classList.add("blinker-animate")
    await freeze(2500);
    for (const char of hackerGreenText) {
      programmerText.innerHTML += char;
      await freeze(150); // this will "block" the execution for 100ms
    }
    await freeze(500)
    iAmText.classList.add("text-hacker-green");
    await freeze(3000)
    // iAmText.classList.remove("programmer-before");
    greenBlinker.classList.add("hidden");
    // 
    blueBlinker.classList.remove("hidden");
    blueBlinker.classList.add("blinker-animate")
    await freeze(2500);
    for (const char of blueText1) {
      programmerText2.innerHTML += `<span class="tag attr-name token">${char}</span>`;
      await freeze(150); // this will "block" the execution for 100ms
    }
    for (const char of blueText2) {
      programmerText2.innerHTML += `</span><span class="tag attr-value token">${char}</span>`;
      await freeze(150); // this will "block" the execution for 100ms
    }
    await freeze(500)
    mcelroy.classList.add("blue")

    await freeze(1500)
    blueBlinker.classList.add("hidden");
    blinkerThree.classList.remove("hidden")
    blinkerThree.classList.add("blinker-animate")
    for (const char of text3) {
      programmerText3.innerHTML += `<span class="tag attr-name token">${char}</span>`;
      await freeze(150); // this will "block" the execution for 100ms
    }
    for (const char of text4) {
      programmerText3.innerHTML += `</span><span class="tag attr-value token">${char}</span>`;
      await freeze(150); // this will "block" the execution for 100ms
    }
    await freeze(500)
    document.getElementById('cta').classList.add('slide-left');

  }

  selfCode();

  // Get elements
  const cards = Array.from(document.querySelectorAll('.card'));

  // Create Intersection Observer
  const observer = new IntersectionObserver((entries)=>{
      entries.forEach((entry)=>{
          if (entry.boundingClientRect.top > 0) {
              if (entry.isIntersecting){
                  entry.target.classList.remove('invisible');
                  entry.target.classList.add('show');
              } else{
                  entry.target.classList.remove('show');
                  entry.target.classList.add('invisible');
              }
          }
      });
  }, { rootMargin: "0px 0px -30% 0px" });

  // Observe each card
  cards.forEach((card) => observer.observe(card));


  // // Get elements
  // const card = document.querySelector(".card-body");


  // const projectTexts = Array.from(document.getElementsByClassName('card-text'));
  // console.log(projectTexts)

  // const observer = new IntersectionObserver((entries)=>{
  //     entries.forEach((entry)=>{
  //       if (entry.boundingClientRect.top > 0) {
  //         console.log(entry.boundingClientRect.top) 
  //         if (entry.isIntersecting){
  //             entry.target.parentNode.parentNode.classList.remove('invisible');
  //             entry.target.parentNode.parentNode.classList.add('show');
  //           }else{
  //             entry.target.parentNode.parentNode.classList.remove('show')
  //             entry.target.parentNode.parentNode.classList.add('invisible');
  //         }
  //       }else{
  //         console.log(entry)
  //       }
  //     });
  // });

  // projectTexts.forEach((proj)=>observer.observe(proj));

});
