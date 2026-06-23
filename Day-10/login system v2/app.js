const username1 = "abcd";
const password1 = "1234" ;
let user1 = document.querySelector("#username1");
let pass1 = document.querySelector("#pass1");
let loginbtn1 = document.querySelector("#login1");
loginbtn1.addEventListener("click",()=>{
    let message = document.querySelector("#message");
    if(user1.value == username1 && pass1.value == password1)
    {
        message.innerText=`welcome ${username1}`;
    }else{
       message.innerText="invalid creditionals";
    }
});
