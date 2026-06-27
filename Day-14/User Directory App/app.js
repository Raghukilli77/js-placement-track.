

let list = document.querySelector("#list");
let show = document.querySelector("#showbtn");
showbtn.addEventListener("click",()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => {

   users.forEach(user => {
    let li = document.createElement("li");

    // Add name
    let name = document.createElement("div");
    name.innerText = user.name;
    li.appendChild(name);

    // Add email
    let email = document.createElement("div");
    email.innerText = user.email;
    li.appendChild(email);

    // Add phone
    let phone = document.createElement("div");
    phone.innerText = user.phone;
    li.appendChild(phone);

    // Append the whole li to the list
    list.appendChild(li);
});

});
});
