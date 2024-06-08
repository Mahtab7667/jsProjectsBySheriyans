let add=document.getElementById("add");
let remove=document.getElementById("remove");

let flag=0;

add.addEventListener('click',()=>{
    if(flag==0){
        let status=document.querySelector("h1");

        status.textContent="Friend"
        status.style.color="green"
    
        add.textContent="Rmv Friend"
        add.style.backgroundColor="red";
        add.style.color="black"

        flag=1;
    }
    else{
        let status=document.querySelector("h1");

        status.textContent="Stranger"
        status.style.color="black"
    
        add.textContent="Add Friend"
        add.style.backgroundColor="Green";
        add.style.color="white"

        flag=0;
    }
})
