let btn = document.querySelector("#data1");
let button = document.querySelector("#show");
let search = document.querySelector("#name");
let output = document.querySelector("#list");

button.addEventListener("click", () => {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => {
            // Filter users by the input value
            let result = data.filter(user =>
                user.name.toLowerCase().includes(search.value.toLowerCase())
            );

            // Render the results inside the output element
            output.innerHTML = result.map(user => `<li>${user.name}</li>`).join("");
        })
        .catch(error => console.error("Error fetching users:", error));
});


btn.addEventListener("click",()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });
    });
