// function in typescript

// function name (param1: type, ...) : return type of function => { function body }

const getFullName = (firstName: string, lastName: string): string => {
    return firstName + ' ' + lastName;
};

console.log(getFullName('suneet', 'meena'));

// objects in typescript
// ? is used if the entity of object is optional

interface UserInterface {
    name: string,
    age?: number,
    getMessage(): string
}

let user1: UserInterface = {
    name: 'suneet',
    age: 27,
    getMessage(){
        return 'Hello ' + this.name;
    }
}

let user2: UserInterface = {
    name: 'Ashwaq',
    getMessage() {
        return 'salamwalekum ' + this.name;
    }
}

console.log(user1.getMessage());

// Union and type alias in typescript

// declare variable : union of types which variable can be assigned = default value;
let pageNumber: string | number = '0';

let errorMessage: string | null = null;

// selected user could be an empty object if !selected
let selectedUser: UserInterface | object = {};


// type aliases

type skill = string

let skills: skill[] = ['javascript', 'php'];

// type aliases with union
type numberOrString = string | number;

let age: numberOrString;

age = 1;
age = "1";

// void type

const aVoidFunction = () : void => {
    console.log("A void function");
    //return null; // A void function by default returns undefined;
};
console.log(aVoidFunction());


// Any type (avoid using any) Any is not a solution but start of bigger problems

let foo: any = "foo";
foo = {}
foo = 1
foo = true

// type = never; used in libraries maybe

const aNeverFunction = (): never => {
    throw 'never';
}

// type = unknown
let vAny: any = 10
let vUnknown: unknown = 10

let s1: string = vAny;

// but we can't do
// let s2: string = vUnknown; // unknown is identified as a type where as any could be simply any type;

// Type assertion

let stringFromAny: string = vAny as string;

let pageNo: string = '1';
let numericPageNo: number = (pageNo as unknown) as number;

// Typescript working with DOM
// class Element is the higest class

/* const someElement = document.querySelector(".foo") as HTMLInputElement;
console.log("some element ", someElement.value) */

// generally people don't typecast to HTMLInputElement. They convert the type to any (as any) and call the value property
// this is not a safe or recommended practice.

// Adding event listner
/* let someElement1 = document.querySelector(".foo");

someElement1.addEventListener('blur', (event) => {
    let target = event.target as HTMLInputElement;
    console.log(target.value)
}); */

// interface of class Person, here you can define public contracts/methods that you want the class to implement
interface PersonInterface {
    getFullName(): string
}

class Person implements PersonInterface {
    protected firstName: string
    lastName: string
    age: number
    static readonly maxage = 50;

    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    isOld(): boolean {
        return this.age > Person.maxage;
    }

    getFullName(): string {
        return this.firstName + ' ' + this.lastName;
    }
}

class Student extends Person{
    grade: string
    constructor(firstName: string, lastName: string, age: number, grade: string) {
        super(firstName, lastName, age);
        this.grade = grade;
    }

    getFirstNameUpperCase(): string {
        return this.firstName.toUpperCase();
    }
}

let student = new Student('suneet', 'meena', 27, 'A+');
console.log(student.getFirstNameUpperCase());
console.log('Student old? ',student.isOld());
console.log('max age is ', Person.maxage)


class Teacher extends Person {
    private rootAccess: boolean = false;

    setRootAccess(access: boolean) {
        this.rootAccess = access;
    }

    getRootAccess() {
        return this.rootAccess;
    }
}

let teacher = new Teacher('Radha', 'Motwani', 61)
console.log(teacher.getRootAccess());
teacher.setRootAccess(true);
console.log(teacher.getRootAccess());









