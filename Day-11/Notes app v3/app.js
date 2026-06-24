let notes=[];
let note = document.querySelector("#note");
let shownotebtn = document.querySelector("#shownote");
let savenotebtn = document.querySelector("#savenote");
let p = document.querySelector("#data");
savenotebtn.addEventListener("click",()=>{
    // localStorage.setItem("note", note.value);
    notes.push(note.value);
    localStorage.setItem("notes", JSON.stringify(notes));
});
shownotebtn.addEventListener("click",()=>{
    let data = JSON.parse(localStorage.getItem("notes"));
    // alert(data.join(","));
    p.textContent= data.join(",");
});
