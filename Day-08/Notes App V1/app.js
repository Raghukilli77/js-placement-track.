let notearray =[];
let note = document.querySelector("#note");
let display =document.querySelector("#addisplay");
let notes = document.querySelector("#notes");
display.addEventListener("click",()=>{
    notearray.push(note.value);
    note.value="";
    notes.innerHTML="";
    for(let i=0;i<notearray.length;i++)
    {
        let li = document.createElement("li");
        li.textContent = notearray[i];
        notes.appendChild(li);
    }
})
