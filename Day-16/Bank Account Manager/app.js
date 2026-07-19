import { Bankaccount } from "./bankaccount.js";

let checkbalance = document.querySelector("#showbalance");
let deposit = document.querySelector("#deposit");
let withdraw = document.querySelector("#withdraw");
let output = document.querySelector("#list");

let depositmoney = document.querySelector("#depositmoney");   // fixed
let withdrawmoney = document.querySelector("#withdrawamount"); // fixed

let s1 = new Bankaccount(9999);

function displaybalance() {
    output.textContent = `Remaining balance: ${s1.Amount}`;
}

checkbalance.addEventListener("click", () => {
    displaybalance();
});

deposit.addEventListener("click", () => {
    depositmoney.hidden = false;
    depositmoney.addEventListener("change", () => {
        let value = parseInt(depositmoney.value);
        if (!isNaN(value)) {
            s1.Deposit(value);   // fixed method name
            displaybalance();
            depositmoney.value = "";
            depositmoney.hidden = true;
        }
    });
});

withdraw.addEventListener("click", () => {
    withdrawmoney.hidden = false;
    withdrawmoney.addEventListener("change", () => {
        let val = parseInt(withdrawmoney.value);
        if (!isNaN(val)) {
            s1.Withdraw(val);   // fixed method name
            displaybalance();
            withdrawmoney.value = "";
            withdrawmoney.hidden = true;
        }
    });
});
