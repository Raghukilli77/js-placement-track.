
let Numbers = [100,200,300];
let inc = document.querySelector("#inc");
let printinc = document.querySelector("#printinc");
inc.addEventListener("click",()=>{
    let double = Numbers.map((num)=>{
        let x = num * 0.1;
        return num + x;
    });
    printinc.innerHTML = double.join(",");
});
