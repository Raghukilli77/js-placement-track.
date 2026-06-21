let tasks = [];
let task = document.querySelector("#task")
let addtask = document.querySelector("#addtask");
let displaytask = document.querySelector("#displaytask");
addtask.addEventListener("click",()=>{
   tasks.push(task.value);
   task.value = "";
})
displaytask.addEventListener("click", () => {
    let list = document.querySelector("#taskList");
    list.innerHTML = ""; 

    for (let i = 0; i < tasks.length; i++) {
        let li = document.createElement("li");
        li.textContent = tasks[i];
        list.appendChild(li);
    }
});
