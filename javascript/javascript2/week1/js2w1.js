// find the shortest word of an array of words

const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];

let lengths = [];
for (let index = 0; index < danishWords.length; index++) {
    lengths.push(danishWords[index].length)
}
const min = Math.min(...lengths)

function findShortWord(danishWords) {
    let shortestWord = min;
    danishWords.forEach(element => {
        if (element.length === shortestWord) {
            shortestWord = element
        }
    })
    return shortestWord;
}

console.log(findShortWord(danishWords))
