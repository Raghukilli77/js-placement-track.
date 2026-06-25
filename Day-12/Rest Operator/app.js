let sum = document.querySelector("#sum");
let data = document.querySelector("#data");
function total(...marks) {
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
        sum = sum + marks[i];   // add each mark
    }
    data.innerHTML = `Numbers: ${marks.join(", ")} <br>Total: ${sum}`;
}
sum.addEventListener("click",()=>{
    total(10,20,23);
});
