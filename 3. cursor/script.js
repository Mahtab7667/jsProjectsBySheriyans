let main=document.querySelector("main");
let crsr=document.querySelector(".cursor");
let h1=document.querySelector("h1");

main.addEventListener("mousemove",(e)=>{
    crsr.style.position="absolute";
    crsr.style.left=e.x+"px";
    crsr.style.top=e.y+"px";

    // crsr.style.transition="position 2s linear"
    crsr.style.transition="all 0.5s linear"
})
