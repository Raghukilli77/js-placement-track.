let print = document.querySelector("#print");
let dataprint = document.querySelector("#dataprint");

let students = [
    {name:"Roy", cgpa:8.5},
    {name:"Alex", cgpa:6.0},
    {name:"John", cgpa:9.1}
];
print.addEventListener("click",()=>{
    let filtered = students.filter(student => student.cgpa >= 7);
      let formatted = filtered.map(student => student.name + " - CGPA: " + student.cgpa);
    dataprint.innerHTML = formatted.join("<br>")
});
