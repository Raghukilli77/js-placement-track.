let tasks =[];
let taskname = document.querySelector("#taskname");
let addtask = document.querySelector("#addtask");
let deletetask = document.querySelector("#deletetask");
let tasklist = document.querySelector("#tasklist");

function displaytasks()
{
    tasklist.innerHTML="";
    tasks.forEach(n => {
        let li = document.createElement("li");
        li.innerText = n;
       tasklist.appendChild(li);
    });
  
}
addtask.addEventListener("click",()=>{
    let value = taskname.value.trim();
    if(value !== "")
    {
        tasks.push(value);
        displaytasks();
        taskname.value="";
    }
});
deletetask.addEventListener("click",()=>{
    let value = taskname.value.trim();
    if(value !== "")
    {
        let index = tasks.indexOf(value);
        if(index !== -1)
        {
            tasks.splice(index , 1);
            displaytasks();
        }
    }
    taskname.value="";
});
