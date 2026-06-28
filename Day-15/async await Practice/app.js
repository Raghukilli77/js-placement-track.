let btn = document.querySelector("#data1");
let output1 = document.querySelector("#list1");
btn.addEventListener("click",()=>{
    async function getUsers()
{
    let response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
    );

    let data = await response.json();
        output1.innerHTML = "";

        data.forEach(user => {
            let li = document.createElement("li");
            li.innerHTML = `<strong>${user.name}</strong> - ${user.email}`;
            output1.appendChild(li);
        });
}

getUsers();

});
