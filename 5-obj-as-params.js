function printInfo(info) {
    console.log(`Name: ${info.fName} ${info.lName} (${info.nName})
Age: ${info.age}
Grade: ${info.grade}
Student? ${info.student}`)
}

// printInfo('John', 'Doe', 'JD', 18, true, 3.85)
printInfo({
    fName: 'John',
    lName: 'Doe',
    nName: 'JD',
    student: true,
    grade: 3.85,
    age: 18
})
