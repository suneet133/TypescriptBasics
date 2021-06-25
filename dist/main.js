// function in typescript
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// function name (param1: type, ...) : return type of function => { function body }
var getFullName = function (firstName, lastName) {
    return firstName + ' ' + lastName;
};
console.log(getFullName('suneet', 'meena'));
var user1 = {
    name: 'suneet',
    age: 27,
    getMessage: function () {
        return 'Hello ' + this.name;
    }
};
var user2 = {
    name: 'Ashwaq',
    getMessage: function () {
        return 'salamwalekum ' + this.name;
    }
};
console.log(user1.getMessage());
// Union and type alias in typescript
// declare variable : union of types which variable can be assigned = default value;
var pageNumber = '0';
var errorMessage = null;
// selected user could be an empty object if !selected
var selectedUser = {};
var skills = ['javascript', 'php'];
var age;
age = 1;
age = "1";
// void type
var aVoidFunction = function () {
    console.log("A void function");
    //return null; // A void function by default returns undefined;
};
console.log(aVoidFunction());
// Any type (avoid using any) Any is not a solution but start of bigger problems
var foo = "foo";
foo = {};
foo = 1;
foo = true;
// type = never; used in libraries maybe
var aNeverFunction = function () {
    throw 'never';
};
// type = unknown
var vAny = 10;
var vUnknown = 10;
var s1 = vAny;
// but we can't do
// let s2: string = vUnknown; // unknown is identified as a type where as any could be simply any type;
// Type assertion
var stringFromAny = vAny;
var pageNo = '1';
var numericPageNo = pageNo;
var Person = /** @class */ (function () {
    function Person(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    Person.prototype.isOld = function () {
        return this.age > Person.maxage;
    };
    Person.prototype.getFullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    Person.maxage = 50;
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(firstName, lastName, age, grade) {
        var _this = _super.call(this, firstName, lastName, age) || this;
        _this.grade = grade;
        return _this;
    }
    Student.prototype.getFirstNameUpperCase = function () {
        return this.firstName.toUpperCase();
    };
    return Student;
}(Person));
var student = new Student('suneet', 'meena', 27, 'A+');
console.log(student.getFirstNameUpperCase());
console.log('Student old? ', student.isOld());
console.log('max age is ', Person.maxage);
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rootAccess = false;
        return _this;
    }
    Teacher.prototype.setRootAccess = function (access) {
        this.rootAccess = access;
    };
    Teacher.prototype.getRootAccess = function () {
        return this.rootAccess;
    };
    return Teacher;
}(Person));
var teacher = new Teacher('Radha', 'Motwani', 61);
console.log(teacher.getRootAccess());
teacher.setRootAccess(true);
console.log(teacher.getRootAccess());
