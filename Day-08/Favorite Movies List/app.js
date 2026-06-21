let movies = [];
let val = document.querySelector("#movie")
let add = document.querySelector("#ad");
let btn1 = document.querySelector("#display");
add.addEventListener("click",()=>{
   movies.push(val.value);
   val.value = "";
})
btn1.addEventListener("click", () => {
    let list = document.querySelector("#movieList");
    list.innerHTML = ""; 

    for (let i = 0; i < movies.length; i++) {
        let li = document.createElement("li");
        li.textContent = movies[i];
        list.appendChild(li);
    }
});
