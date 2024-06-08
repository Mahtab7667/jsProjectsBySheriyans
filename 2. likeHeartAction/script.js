let cont = document.querySelector(".container");
let span=document.querySelector("span")


cont.addEventListener("dblclick",()=>{

    span.style.transform="translate(-50%,-50%) scale(1.2)"
    span.style.opacity="0.7"

    setTimeout(()=>{
     span.style.opacity="0"
     span.style.transform="translate(-50%,-50%) scale(0)"
    },1000)
})