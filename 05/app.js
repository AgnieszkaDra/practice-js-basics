

function Student(initFirstName, initLastName) {
    this.firstName = initFirstName;
    this.lastName = initLastName;
    this.grades = {}
}

Student.prototype.showFullName = function () {
    console.log(this.firstName, this.lastName)
}

Student.prototype.addGrade = function (subject, grade) {
    //console.log(this.subject = subject, this.grade = grade, )

    if (typeof this.grades[subject] === 'undefined') {
        this.grades[subject] = [];
        //console.log(this.grades[subject])
    }
    this.grades[subject].push(grade)
}

Student.prototype.getAverageGrade = function (subject) {
    if (typeof subject === 'undefined') {
        const grades = [];
        for (const key in this.grades) {
            const arr = this.grades[key]
            arr.forEach(function (item) {
                grades.push(item)
            });

            console.log(grades)
            if (grades.length === 0) {
                return 0;
            }

            const sum = grades.reduce(function (acc, curr) {
                return acc + curr;
            }, 0)

            return sum / grades.length
        }
    }

    if (typeof this.grades[subject] === 'undefined') {
        return 0;
    }

    const grades = this.grades[subject]

    // const sum = grades.reduce(function (acc, curr) {
    //     return acc + curr;
    // }, 0)

    return this.avg(grades)
}

Student.prototype.avg = function(arr) {
    if(arr.length === 0){
        return 0;
    }
    const sum = grades.reduce(function (acc, curr) {
        return acc + curr;
    }, 0)
    
    return sum / grades.length
}
const student = new Student('Jan', 'Kowalski')
student.showFullName()


student.addGrade('maths', 4);
student.addGrade('maths', 6);
student.addGrade('english', 3);
student.addGrade('polish')


console.log(student.getAverageGrade())
