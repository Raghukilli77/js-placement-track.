let p = document.querySelector("#name");
let btn = document.querySelector("#addprint");
let list = document.querySelector("#list");
btn.addEventListener("click",()=>{
//  let br = document.createElement("br");
    
//     list.append(`${p.value}`, br);
    let li = document.createElement("li");

li.innerText = p.value;

list.appendChild(li);
    p.value = "";
})
