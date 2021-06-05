let name, age, ageName

function askInfo() {
    name = prompt('Your name:')
    age = prompt('Your age:')
}

function checkAgeAndUpdateLabel() {
    if (age < 18) {
        ageName = 'Young'
    } else {
        ageName = 'Adult'
    }
}

function showInfo() {
    alert(`Hello, ${name} (${age}:${ageName})`)
}

askInfo()
checkAgeAndUpdateLabel()
showInfo()
