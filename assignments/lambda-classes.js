// CODE here for your Lambda Classes
/*
Three different types of People:
1) Instructors --> Extensions of "Person"
2) Students --> Extensions of "Person"
3) Project Managers --> Extensions of Instructors
*/

//(Person) base class:
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

//person ex:
const dude = new Person({
    name: 'Dude',
    age: 40,
    location: 'Pomona, CA',
    gender: 'male'
});

//(Instructor) child class:
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

    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on {subject}`);
    }
}

//instructor ex:
const kyle = new Instructor({
    name: 'Kyle',
    age: 28,
    location: 'Spearfish, SD',
    gender: 'male',
    specialty: 'CSS',
    favLanguage: 'Javascript',
    catchPhrase: "If you are not living on the edge, you are taking up too much room!"
});

//(Student) child class:
class Student extends Person {
    constructor(props) {
        super(props);
        this.previousBackground = props.previousBackground;
        this.className = props.className;
        this.favSubjects = props.favSubjects;
    }

    listsSubjects() {
        this.favSubjects.forEach(arrItem => {
            console.log(arrItem);
        });
    }

    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}!`);
    }

    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}!`);
    }
}

//student ex:
const danny = new Student({
    name: 'Danny',
    age: 29,
    location: 'Spearfish, SD',
    gender: 'male',
    specialty: 'SQL',
    favLanguage: 'Blockchain',
    catchPhrase: "Pitter patter, let's get at 'er!",
    previousBackground: 'HTML, CSS',
    className: 'WEBPT5',
    favSubjects: ['History', 'Computer Science', 'Music', 'Art']
});

//(ProjectManager) child class:
class ProjectManager extends Instructor {
    constructor(props) {
        super(props);
        this.gradClassName = props.gradClassName;
        this.favInstructor = props.favInstructor;
    }

    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @${channel} standy times!`);
    }

    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}!`);
    }
}

//ProjectManager ex:

const cameron = new ProjectManager({
    name: 'Cameron',
    age: 31,
    location: 'Salt Lake City, UT',
    gender: 'male',
    specialty: 'C++',
    favLanguage: 'Python',
    catchPhrase: "I got this!",
    gradClassName: 'FSW2',
    favInstructor: 'Josh Knell'
});

//student ex:
const roman = new Student({
    name: 'Nicholas',
    age: 27,
    location: 'Spearfish, SD',
    gender: 'male',
    specialty: 'UI/UX Design',
    favLanguage: 'English ^_^',
    catchPhrase: "What can ya do?",
    previousBackground: 'HTML',
    className: 'FSW18',
    favSubjects: ['Music', 'P.E.', 'Geography']
});

cameron.standUp('FSW8');
cameron.debugsCode(roman, 'Javascript Fundamentals');