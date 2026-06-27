

let showbutton = document.querySelector("#showsetup");
let output = document.querySelector("#data");
let output1 = document.querySelector("#punchline");
showbutton.addEventListener("click",()=>{
    fetch("https://official-joke-api.appspot.com/random_joke")
    .then(response => response.json())
    .then(data => {
        console.log(data.setup);
        console.log(data.punchline);
        output.innerText = data.setup;
        output1.innerText = data.punchline;
    });
});
