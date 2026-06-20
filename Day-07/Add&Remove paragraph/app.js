let p = document.querySelector("#paragraph1")
let btn4 = document.querySelector("#display");
let btn5 = document.querySelector("#remove");
btn4.addEventListener("click", ()=>{
   p.innerText = "hello roy";
})
btn5.addEventListener("click",()=>{
    p.innerText = "";
})
