let n = document.querySelector("#name");
let showbtn = document.querySelector("#show");
let savebtn = document.querySelector("#save");
let output = document.querySelector("#output");



savebtn.addEventListener("click", () => {
    // Example array
    let students = ["roy", "alex"];
    // Save array as JSON string
    localStorage.setItem("students", JSON.stringify(students));
});

showbtn.addEventListener("click", () => {
    // Retrieve JSON string
    let data = JSON.parse(localStorage.getItem("students"));
    // Display array on page
    output.textContent = data.join(", ");
});
