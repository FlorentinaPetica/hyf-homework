console.log('Ez Namey!') // Ez Namey (Startup name generator)

let firstWords = ['Amusing', 'Enjoyable', 'Entertaining', 'Lively', 'Pleasant', 'Boisterous', 'Convivial', 'Merry', 'Hyggelig', 'Zippy']

let secondWords = ['Gargle', 'Thingy', 'Master', 'Socks', 'Whiskers', 'Cake', 'Fault', 'Ideas', 'Lettuce', 'Story'];

const randomNumber = Math.floor(Math.random() * firstWords.length);

const startUpName = firstWords[randomNumber] + ' ' + secondWords[randomNumber];

console.log(`Your start ups new name is: "${startUpName}" and contains ${startUpName.length} character.`)