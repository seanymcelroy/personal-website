"use strict";

// DOMContentLoaded event ensures that the script runs after the entire DOM has been loaded.
document.addEventListener('DOMContentLoaded', function() {

  
  const themeSwitchBtn = document.getElementsByClassName("theme-switch")[0];
  const moon = document.getElementById("moon_svg");
  const sun = document.getElementById("sun_svg");
  const body = document.body;  // select the body from the DOM

  // const copywrightDateHTML = document.getElementById("copywrightDate");
  // copywrightDateHTML.innerHTML= new Date().getFullYear();
  
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
      body.className = savedTheme;
      if (savedTheme == 'dark') {
        moon.classList.add("hidden");
        sun.classList.remove("hidden");
      } else {
        sun.classList.add("hidden");
        moon.classList.remove("hidden");
      }
  }
  themeSwitchBtn.onclick = () => {
      if (body.classList.contains("dark")) {
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


  const iAmTextHTML = document.getElementById("iAmText");
  const mcelroyHTML = document.getElementById("mcelroy");
  const ctaBTN = document.getElementById("cta")
  

  const cssHackerText = 'text-hacker-green';
  const cssClassText = ' class';
  const blueText2 = '="text-blue"';
  const blinker1 = document.getElementById("blinker-one");
  const blinker2 = document.getElementById("blinker-two");
  const blinker3 = document.getElementById("blinker-three");

  const codeEdit1 = document.getElementById('programmer-text');
  const codeEdit2 = document.getElementById('programmer-text-2');
  const codeEdit3 = document.getElementById('programmer-text-3');

  const cssAlignLeftText = '="left"'; 
  const typeDelay = 150;
  const animationDelay = 400;

  function freeze(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  function startBlinking(blinker){
    blinker.classList.remove("hidden");
    blinker.classList.add("blinker-animate")
  }
  function hideBlink(blinker){
    blinker.classList.add("hidden");
  }

  async function type(codeblock, nuCode){
    for (const char of nuCode) {
      codeblock.innerHTML += char;
      await freeze(typeDelay); 
    }
  }

  async function animate(element, clazz){
    await freeze(animationDelay)
    element.classList.add(clazz)
  }
  

  async function selfCode(){
    startBlinking(blinker1)
    await freeze(1500);
    await type(codeEdit1, cssHackerText)

    animate(iAmTextHTML, "text-hacker-green");
    await freeze(2000)
    hideBlink(blinker1);
    // 
    startBlinking(blinker2)
    await freeze(2000);
    await type(codeEdit2, cssClassText.split("").map(char => `<span class="tag attr-name token">${char}</span>`))
    await type(codeEdit2, blueText2.split("").map(char => `</span><span class="tag attr-value token">${char}</span>`))

    animate(mcelroyHTML, "blue");

    await freeze(2000)
    hideBlink(blinker2)

    startBlinking(blinker3)
    await type(codeEdit3, cssClassText.split("").map(char => `<span class="tag attr-name token">${char}</span>`))
    await type(codeEdit3, cssAlignLeftText.split("").map(char => `</span><span class="tag attr-value token">${char}</span>`))

    animate(ctaBTN, "slide-left");

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

});
