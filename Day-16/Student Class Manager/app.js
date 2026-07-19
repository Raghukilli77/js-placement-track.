    import { Student } from "./student.js";


let btn = document.querySelector("#show");
let output = document.querySelector("#list");
let heading = document.querySelector("#heading");
btn.addEventListener("click",()=>{
    let s1 =new Student("raghu",123,"cse");
    output.textContent=s1.getdetails();
    heading.hidden=false;
});
