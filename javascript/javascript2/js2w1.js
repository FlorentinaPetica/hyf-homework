// find the shortest word of an array of words

const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];

function findShortWord(danishWords) {
    let shortestWord = danishWords[0].length;
    danishWords.forEach(item => {
        if (item.length < shortestWord) {
            shortestWord = item
        }
    })
    return shortestWord
}

console.log(findShortWord(danishWords))