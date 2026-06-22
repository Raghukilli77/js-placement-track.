let notes =[];
let notename = document.querySelector("#notename");
let addnote = document.querySelector("#addnote");
let deletenote = document.querySelector("#deletenote");
let notelist = document.querySelector("#notelist");

function displaynotes()
{
    notelist.innerHTML="";
    notes.forEach(n =>{
        let li = document.createElement("li");
        li.innerText = n;
        notelist.appendChild(li);
    });

}

addnote.addEventListener("click",()=>{
    let value = notename.value.trim();
    if(value !== "")
    {
        notes.push(value);
        displaynotes();
        notename.value="";
    }
});

deletenote.addEventListener("click",()=>{
    let value = notename.value.trim();
    if(value !== "")
    {
        let index = notes.indexOf(value);
        if(index !== -1){
            notes.splice(index , 1);
            displaynotes();
        }
    }
    notename.value="";
});
