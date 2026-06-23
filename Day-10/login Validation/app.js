const username = "abcd";
const password = 1234 ;
let user = document.querySelector("#username");
let pass = document.querySelector("#pass");
let loginbtn = document.querySelector("#login");
loginbtn.addEventListener("click",()=>{
    if(user.value == username && pass.value == password)
    {
        alert("login suceessfull");
    }else{
        alert("invalid creditionals");
    }
})
