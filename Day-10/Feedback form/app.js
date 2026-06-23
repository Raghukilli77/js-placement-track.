function display(){
    let list = document.querySelector("#list");
    list.innerHTML="";
    feedback.forEach(n => {
        let li = document.createElement("li");
        li.innerText= n;
        list.appendChild(li);
    });
}

feedback =[];
let names = document.querySelector("names");
let feed = document.querySelector("#feedback");
let store = document.querySelector("#store");
store.addEventListener("click",()=>{
    let value = feed.value.trim();
    if(value !== "")
    {
        feedback.push(value);
        display();
    }
    feed.value="";
});
