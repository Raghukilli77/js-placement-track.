//settimeout,setinterval,clearinterval
let show = document.querySelector("#show");
show.addEventListener("click",()=>{
    console.log("printing...");
    setTimeout(() => {
        console.log("hii");
    },3000);
  let id =  setInterval(() => {
    console.log("Hello every seecond");
    }, 1000);
    setTimeout(()=>{
            clearInterval(id);
    },5000);
});
//call back funtions
function prosessing(callback)
{
    callback();
}
function students()
{
    console.log("processing students");
}
let save = document.querySelector("#save");
save.addEventListener("click",()=>{
    prosessing(students);
});
