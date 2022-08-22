"strict";

let btn = document.getElementById("but");
const body =document.body;

btn.onclick= ()=>{
    if (body.classList[0]=="dark"){
        body.classList.replace("dark", "light")
    }else{
        body.classList.replace("light","dark")

    }
}
