let students =[];
let p = document.querySelector("#name");
let btn = document.querySelector("#addprint");
let list = document.querySelector("#list");
btn.addEventListener("click",()=>{
    students.push(p.value);
    list.innerHTML = "";
    for(let i=0;i<students.length;i++){
    let li = document.createElement("li");

    li.innerText = students[i];

    list.appendChild(li);
    p.value ="";
    }
})
