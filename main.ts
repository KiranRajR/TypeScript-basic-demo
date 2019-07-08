export{}
let message = 'Welcome Back';
console.log(message);

let x = 10;
const y = 20;

const title = 'Codevolution';
let isBeginner:boolean = true;
let total:number = 0;
let name:string = 'Kiran';

let sentence:string = `My name is ${name}
I am a beginner in TypeScript`;

console.log(sentence);

let n:null = null;
let u:undefined = undefined;


let isNew: boolean = null;
let myName: string = undefined;

let list1: number[] = [1,2,3];
let list2: Array<number> = [1,2,3];

let person1: [string, number] = ['Obama', 30];

enum color {Red = 5, Green, Blue};

let c: color = color.Green;
console.log(c);

let randomValue: any = 10;
randomValue = true;
randomValue = 'Kiran';

let myVariable: any = 'testing';

function hasName(obj: any): obj is { name: string} {
    return !!obj && 
        typeof obj === "object" && 
        "name" in obj
}

if (hasName(myVariable)) {
    console.log(myVariable.name); 
}
(myVariable as string).toUpperCase();

let a;
a = 10;
a = true;

let b = 20;

let multiType: number | boolean;
multiType = 20;
multiType = true;

let anyType: any;
anyType = 20;
anyType = true;

interface Persion {
    firstname: string, 
    lastname?: string
};

function fullName(persion: Persion) {
    console.log(`${persion.firstname} ${persion.lastname}`);
}

let nameData = {
    firstname: "kiran",
    lastname: "raj"
}
fullName(nameData);

class Employee {
    employeeName; string;

    constructor(name: string) {
        this.employeeName = name;
    }

    greet() {
        console.log(`Good morning ${this.employeeName}`);
    }
}

let emp1 = new Employee('Kiran');
console.log(emp1.employeeName);
emp1.greet();


class manager extends Employee {
    constructor(managerName: string) {
        super(managerName);
    }
    deligateWork() {
        console.log(`Manager deligate tasks`);
    }
}

let m1 = new manager('Bruce');
m1.deligateWork();
m1.greet();
console.log(m1.employeeName);