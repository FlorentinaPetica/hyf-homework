let names = []
let todoList = []
let calculation = ['+', '-', '/', '*']

function getReply(command) {
    if (command.indexOf('name is') !== -1) {
        names.push(command.slice(command.indexOf('name is') + 'name is'.length))
        return `Nice to meet you ${names[0]}`
    }

    if (command.indexOf('is my name') !== -1) {
        return `Your name is ${names[0]}`
    }

    if (command.toLowerCase().indexOf('add') !== -1) {
        todoList.push(
            command.slice(command.indexOf('add') + 5, command.indexOf('to') - 1)
        )
    }

    for (let i = 0; i < todoList.length; i++) {
        if (
            command.includes(todoList[i]) &&
            command.toLowerCase().indexOf('add') !== -1
        ) {
            return `${todoList[i]} added to your todo list`
        }
    }

    if (command.toLowerCase().includes('remove')) {
        for (let i = 0; i < todoList.length; i++) {
            if (command.includes(todoList[i])) {
                let removedItem = todoList.splice(
                    todoList.indexOf(todoList[i]),
                    1
                )
                return `${removedItem} was removed from your list`
            }
        }
    }

    if (command.toLowerCase().includes('What is on my')) {
        return `You have ${todoList} in your todo list`
    }

    if (command.includes('today')) {
        return `Today is the ${new Date().getDate()}th of ${new Date().toLocaleString(
            'en-us',
            { month: 'long', year: 'numeric' }
        )}.`
    }

    for (let index = 0; index < calculation.length; index++) {
        if (command.includes(calculation[index])) {
            let numbers = command.match(/\d+/g)
            if (calculation[index] === '+') {
                let result = parseInt(numbers[0]) + parseInt(numbers[1])
                return result
            }
            if (calculation[index] === '/') {
                return `${numbers[0] / numbers[1]}`
            }
            if (calculation[index] === '*') {
                return `${numbers[0] * numbers[1]}`
            }
            if (calculation[index] === '-') {
                return `${numbers[0] - numbers[1]}`
            }
        }
    }

    if (command.toLowerCase().includes('minutes')) {
        const totalMinutes = command.match(/\d+/)
        const totalInMilliseconds = totalMinutes[0] * 60 * 1000
        console.log(`Timer set to ${totalMinutes[0]} minutes.`)

        function setTimer(minutes) {
            console.log(minutes + ' minut(s) are done')
        }

        setTimeout(setTimer, totalInMilliseconds, totalMinutes)
    }
}

console.log(getReply('Hello my name is Benjamin'))
console.log(getReply('What is my name?'))
console.log(getReply('Add fishing to my todo'))
console.log(getReply('Add singing in the shower to my todo'))
console.log(getReply('Remove fishing from my todo'))
console.log(getReply('What is on my todo?'))
console.log(getReply('What day is it today?'))
console.log(getReply('what is 33 + 3'))
console.log(getReply('what is 4 * 12'))
console.log(getReply('Set timer to 2 minutes'))