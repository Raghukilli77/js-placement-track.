let name = document.querySelector("#name");
let addbtn = document.querySelector("#addid");
let list = document.querySelector("#list");
addbtn.addEventListener("click",()=>{
        
        let li = document.createElement("li");
        li.innerText=name.value;
        list.appendChild(li);
        name.value = "";
    
});
