// 1. apply event only on first div for testing purpose
// let em1=document.querySelector("#em1")
// let img=document.querySelector("#em1 img")

// em1.addEventListener("mousemove",(e)=>{
//     img.style.left=e.x+"px";
//     img.style.top=e.y+"px";
//     img.style.transform="translate(-50%,-50%)"
//     img.style.transition="all 0.3s linear"
// })
// em1.addEventListener("mouseenter",(e)=>{
//    img.style.opacity=1;
// })
// em1.addEventListener("mouseleave",(e)=>{
//     img.style.opacity=0;
// })



//2. apply event on all div simultaneously
let em=document.querySelectorAll(".em");


em.forEach((val)=>{
    // console.log(val.childNodes);
    val.addEventListener("mousemove",(e)=>{
        val.childNodes[3].style.left=e.x+"px"
        // val.childNodes[3].style.top=e.y+"px"
        // val.childNodes[3].style.transform="translate(-50%,-50%)"
        })
    val.addEventListener("mouseenter",(e)=>{
       val.childNodes[3].style.opacity="1";
       val.style.backgroundColor="red";
    })
    val.addEventListener("mouseleave",(e)=>{
        val.childNodes[3].style.opacity="0";
        val.style.backgroundColor="transparent"; 
    })
})