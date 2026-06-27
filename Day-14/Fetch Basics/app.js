let btn = document.querySelector("#show");
btn.addEventListener("click",()=>{
    
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => {
        // data.forEach(user => {
        // console.log(user.name);
         console.log(data);
        });   
    });
// });

let btn1 = document.querySelector("#save");
btn1.addEventListener("click",()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
        data.forEach(x =>{
            console.log("user:");
            console.log(x.name);
            console.log(x.email);
            console.log(x.phone);
            console.log("\n");
        });
    });
});
