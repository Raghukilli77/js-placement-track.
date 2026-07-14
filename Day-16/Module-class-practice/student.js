export let student = {
    name: "Roy",
    cgpa: 8.5
};

export class Mobile {
    constructor(x, y, z) {
        this.a = x;
        this.b = y;
        this.c = z;
        console.log(`${this.a}, ${this.b}, ${this.c}`);
    }
    greet(){
        console.log(`welcome ${this.a}`);
    }
}
