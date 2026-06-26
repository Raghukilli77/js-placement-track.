//clock

function updateclock()
{
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    out.innerText =
    `${hours}:${minutes}:${seconds}`;
}
let ctime = document.querySelector("#time");
let timebtn = document.querySelector("#start");
let out = document.querySelector("#out");
timebtn.addEventListener("click",()=>{
    setInterval(()=>{
        updateclock();
    },1000);
})
