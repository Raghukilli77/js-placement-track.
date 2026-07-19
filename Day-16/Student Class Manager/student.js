export class Student{
    constructor(Name ,RollNumber, Branch){
        this.Name= Name;
        this.RollNumber= RollNumber;
        this.Branch= Branch;
    }
        getdetails(){
            return `${this.Name}  | ${this.RollNumber}   |   ${this.Branch}`;
        }
    
}
