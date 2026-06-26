//countdown
let time = document.querySelector("#count");
let countbtn = document.querySelector("#countstart");
let output = document.querySelector("#output");
countbtn.addEventListener("click",()=>{
    let value = parseInt(time.value.trim());
   let i = setInterval(()=>{
        console.log(`${value}`);
        output.innerHTML= value;
        value--;

        if (value < 0) { // stop when countdown finishes
      clearInterval(i);
      output.innerHTML=`time up`;
      console.log("time up");

        }
    },1000)
    
});
