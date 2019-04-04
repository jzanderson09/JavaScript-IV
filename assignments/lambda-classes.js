// CODE here for your Lambda Classes

/*
Three different types of People:
1) Instructors --> Extensions of "Person"
2) Students --> Extensions of "Person"
3) Project Managers --> Extensions of Instructors
*/

/*props: {
    name:
    age: 
    location:
    gender:
}
*/
//Base class:
class Person {
    constructor(props) {
        this.name = props.name;
        this.age = props.age;
        this.location = props.location;
        this.gender = props.gender;
    }

    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}!`);
    }
}

class Instructor extends Person {
    constructor(props) {
        super(props);
        this.specialty = props.specialty;
        this.favLanguage = props.favLanguage;
        this.catchPhrase = props.catchPhrase;
    }

    demo(subject) {
        console.log(`Today we are learning about ${subject}!`);
    }
}

const jake = new Instructor({
    name: 'Jake',
    age: 27,
    location: 'Spearfish, SD',
    gender: 'male',
    specialty: 'CSS',
    favLanguage: 'Javascript',
    catchPhrase: "If you are not living on the edge, you are taking up too much room!"
});

console.log(jake);
jake.speak();
jake.demo('Javascript Fundamentals');