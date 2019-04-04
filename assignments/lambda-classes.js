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

    speak () {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}!`);
    }
}

const jake = new Person({
    name: 'Jake',
    age: 27,
    location: 'Spearfish, SD',
    gender: 'male'
});

console.log(jake);
jake.speak();