// CODE here for your Lambda Classes
/*
Three different types of People:
1) Instructors --> Extensions of "Person"
2) Students --> Extensions of "Person"
3) Project Managers --> Extensions of Instructors
*/

/*-------------Classes:---------------------------*/

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
        console.log(`${student.name} receives a perfect score on ${subject}!`);
    }
}

//(Student) child class:
class Student extends Person {
    constructor(props) {
        super(props);
        this.previousBackground = props.previousBackground;
        this.className = props.className;
        this.favSubjects = props.favSubjects;
    }

    listsSubjects() {
        console.log(`${this.name}'s favorite subjects:`);
        this.favSubjects.forEach(function(element) {
            console.log(element);
        });
    }

    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}!`);
    }

    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}!`);
    }
}

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

/*------------------------------------------------*/

/*---------Full Class Examples:-------------------*/

//person ex:
const dude = new Person({
    name: 'Dude',
    age: 40,
    location: 'Pomona, CA',
    gender: 'male'
});

//ProjectManager ex:
const kyle = new ProjectManager({
    name: 'Kyle',
    age: 28,
    location: 'Spearfish, SD',
    gender: 'male',
    specialty: 'CSS',
    favLanguage: 'Javascript',
    catchPhrase: "If you are not living on the edge, you are taking up too much room!"
});

//instructor ex:
const cameron = new Instructor({
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
    favSubjects: ['History', 'Computer Science', 'Python', 'Art']
});

//student ex:
const roman = new Student({
    name: 'Roman',
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

/*------------------------------------------------*/

/*-----------------Output:------------------------*/

dude.speak();
cameron.demo('Blockchain Technology');
cameron.grade(danny, danny.favSubjects[1]);
danny.listsSubjects();
roman.listsSubjects();
danny.PRAssignment(danny.favSubjects[0]);
roman.PRAssignment(roman.favSubjects[2]);
danny.sprintChallenge(danny.favSubjects[3]);
roman.sprintChallenge(roman.favSubjects[1]);
kyle.standUp('FSW15');
kyle.debugsCode(danny, danny.favSubjects[2]);

/*------------------------------------------------*/