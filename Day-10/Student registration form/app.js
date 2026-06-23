let studentname = document.querySelector("#studentname");
let age =  document.querySelector("#age");
let studentBranch = document.querySelector("#studentBranch");
let register = document.querySelector("#register");
register.addEventListener("click",()=>{
    if(studentname.value !== "" && age.value > 0 && studentBranch.value !== "")
    {
        alert("registration sucessfull");
    }
    else{
        alert("failed");
    }
});
