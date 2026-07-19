export class Bankaccount {
    constructor(Amount) {
        this.Amount = Amount;
    }

    Deposit(value) {
        this.Amount += value;
    }

    Withdraw(value) {
        if (value <= this.Amount) {
            this.Amount -= value;
        } else {
            alert("Insufficient balance!");
        }
    }
}
