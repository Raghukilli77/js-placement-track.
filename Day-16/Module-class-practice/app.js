    import { student } from "./student.js";
    import { Mobile } from "./student.js";


let btn = document.querySelector("#show");
let output = document.querySelector("#list");
btn.addEventListener("click",()=>{
console.log(student.name);
    output.textContent=`${student.name}`;
    let phone =new Mobile("samsung","s25ultra",99999);
    console.log(phone);
    phone.greet();
})
