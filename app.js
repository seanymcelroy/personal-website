"use strict";

// DOMContentLoaded event ensures that the script runs after the entire DOM has been loaded.
document.addEventListener('DOMContentLoaded', function() {
  const body =document.body;

  const themeSwitchBtn = document.getElementsByClassName("theme-switch")[0];
  const moon = document.getElementById("moon_svg")
  const sun = document.getElementById("sun_svg")

  themeSwitchBtn.onclick= ()=>{
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

  const iAmText = document.getElementById("iAmText");
  const mcelroy = document.getElementById("mcelroy");
  

  const hackerGreenText = 'text-hacker-green';
  const blueText1 = ' class';
  const blueText2 = '="text-blue"';
  const greenBlinker = document.getElementById("blinker-green");
  const blueBlinker = document.getElementById("blinker-blue");

  const programmerText = document.getElementById('programmer-text');
  const programmerText2 = document.getElementById('programmer-text-2');
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
    document.getElementById('cta').classList.add('slide-right');
  }

  selfCode();


  function typeWriter(text, target, blinkerClass, callback) {
      let i = 0;
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
  }

  // setTimeout(()=>
  //     {
  //         blinker.classList.remove("blinker-animate");
  //         type();
  //     }, 2000)
    
    
  //   function showGreen() {
  //     const programmerText = document.getElementById("programmer-green");
  //     programmerText.classList.remove("programmer-before");
  //     programmerText.classList.add("text-hacker-green");
  //     setTimeout(() => typeWriter(blueText, 'programmer-text-2', "blinker-blue", displayBlue), 2000);
  //   }
    
    // function displayBlue() {
    //   document.getElementById("mcelroy").classList.add("blue");
    // }
    
    // setTimeout(() => typeWriter(hackerGreenText, 'programmer-text', "blinker-green", showGreen), 1000);
    

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

  const projectTexts = Array.from(document.getElementsByClassName('card-text'));
  // console.log(projects)

  const observer = new IntersectionObserver((entries)=>{
      entries.forEach((entry)=>{
        if (entry.boundingClientRect.top > 0) {
          console.log(entry.boundingClientRect.top) 
          if (entry.isIntersecting){
              entry.target.parentNode.parentNode.classList.remove('invisible');
              entry.target.parentNode.parentNode.classList.add('show');
            }else{
              entry.target.parentNode.parentNode.classList.remove('show')
              entry.target.parentNode.parentNode.classList.add('invisible');
          }
        }
      });
  });

  projectTexts.forEach((proj)=>observer.observe(proj));

});
