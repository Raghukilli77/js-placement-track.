let btn3 = document.querySelector("#data3");
let output3 = document.querySelector("#list3");
btn3.addEventListener("click",()=>{
    async function getauthor()
    {
        let response = await fetch(
            "https://dummyjson.com/quotes/random"
        );
        let data = await response.json();
        output3.innerHTML="";
         let li = document.createElement("li");
        li.innerHTML = `<strong>${data.quote}</strong> - ${data.author}`;
        output3.appendChild(li);
    }
    
    getauthor();
});
