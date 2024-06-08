let arr=[
    {dp:"https://images.unsplash.com/photo-1611601679655-7c8bc197f0c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZWwlMjBnaXJsfGVufDB8fDB8fHww",story:"https://images.unsplash.com/photo-1717343710101-222ff52c5d04?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8RnpvM3p1T0hONnd8fGVufDB8fHx8fA%3D%3D"},

    {dp:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWwlMjBnaXJsfGVufDB8fDB8fHww",story:"https://images.unsplash.com/photo-1717344942746-4c618a670466?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8RnpvM3p1T0hONnd8fGVufDB8fHx8fA%3D%3D"},

    {dp:"https://images.unsplash.com/photo-1576828831022-ca41d3905fb7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWwlMjBnaXJsfGVufDB8fDB8fHww",story:"https://plus.unsplash.com/premium_photo-1664366320037-6cad9e3c6e20?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D"},

    {dp:"https://images.unsplash.com/photo-1617019114583-affb34d1b3cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vZGVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D",story:"https://images.unsplash.com/photo-1503421882325-392a7e71b39d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE3fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D"},

    {dp:"https://images.unsplash.com/photo-1621786030484-4c855eed6974?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1vZGVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D",story:"https://images.unsplash.com/photo-1715353500115-51fce92308d5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM0fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D"},
]


// second part after css which is first part , in this we create story icons
let clutter="";
arr.forEach((val,i)=>{
    clutter+=` <div class="story">
                <img id="${i}" src="${val.dp}" alt="model pic">
            </div>`
})

 let storiyan=document.querySelector(".storiyan")
 storiyan.innerHTML=clutter


// next part of showing story
let fullScreen=document.querySelector(".full-screen")

storiyan.addEventListener("click",(e)=>{
    // console.log(e.target.id);
    // console.log(arr[e.target.id].story);

    fullScreen.style.display="block"
    fullScreen.style.backgroundImage=`url(${arr[e.target.id].story})`

    setTimeout(()=>{
        fullScreen.style.display="none"
    },3000)
})