let btn1 = document.querySelector("#data2");
let output2 = document.querySelector("#list2");
btn1.addEventListener("click",()=>{
    async function getdata()
    {
        let response = await fetch(
            "https://randomuser.me/api/"
        );
        let data = await response.json();
        output.innerHTML="";
        data.results.forEach(user => {
            let li = document.createElement("li");
            li.innerHTML = `<strong>${user.name.first} ${user.name.last}</strong> 
                            - ${user.email} 
                            - ${user.phone}`;
            output2.appendChild(li);
        });
    }
    getdata();
});
