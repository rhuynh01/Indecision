class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGretting() {
        return `Hi, my name is ${this.name}.  I am ${this.age} years old.`
    } 
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major
    }

    hasMajor() {
        return !!this.major
    }

    getGretting() {
        return `Hi, my name is ${super.name}.  I am ${super.age} years old. I am in ${this.major}`
    }

}

const me = new Student('Sean', 18, 'MIS');
console.log(me)
console.log(me.hasMajor())
console.log(me.getGretting())
// console.log(me.getGretting())
