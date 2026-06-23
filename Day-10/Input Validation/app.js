let name = document.querySelector("#name");
let btn = document.querySelector("#submit");
btn.addEventListener("click",()=>{
    let val = name.value.trim();
    if(val == "")
    {
        alert("please eneter a value");
    }else{
        alert("sucess");
    }
});

