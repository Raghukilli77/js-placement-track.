let array1 = ["html ,css "];
let array2 = ["js"];
// let array3 = [...array1, ...array2];
let array3 = array1.concat(array2);
let save = document.querySelector("#save");
save.addEventListener("click",()=>{
    output.innerHTML = array3;
});
