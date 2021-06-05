// parameters, arguments
//
// function greetingTo(parameters) {}
// greetingTo('John') <-- arguments

function greetingTo(name, prefix = 'Hello') {
    // prefix = prefix || 'Hello'
    console.log(`${prefix} ${name}`)
}

function sendMail(from, to, content) {
    console.log(`send mail to ${to} from ${from}: ${content}`)
}

greetingTo('John')
greetingTo('Joe', 'Hi')

sendMail('john@example.com', 'joe@example.com', 'Hello!')
