"strict";

let btn = document.getElementsByClassName("icon-box")[0];
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

