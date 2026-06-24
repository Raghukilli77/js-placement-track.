let n = document.querySelector("#name");
let showbtn = document.querySelector("#show");
let savebtn = document.querySelector("#save");
let output = document.querySelector("#output");
savebtn.addEventListener("click",()=>{
    localStorage.setItem("name", n.value);
   
});
showbtn.addEventListener("click",()=>{
     let name = localStorage.getItem("name");

    
    output.textContent=name;

});
