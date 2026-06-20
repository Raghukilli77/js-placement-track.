let count = document.querySelector("#counter");
let btn3 = document.querySelector("#addid");
btn3.addEventListener("click", ()=>{
    count.innerText = Number(count.innerText)+1;
})
