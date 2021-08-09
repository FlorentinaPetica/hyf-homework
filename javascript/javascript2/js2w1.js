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

// find and count the danish letters

const danishString = "Jeg har en blå bil";
const danishString2 = "Blå grød med røde bær";

function countDanishLetters(str) {

    const arrStr = str.toLowerCase().split('')
    const danishCharacters = [] //find all danish characters in the string
    for (let i = 0; i < arrStr.length; i++) {
        if (arrStr[i]==='ø' || arrStr[i]==='å' || arrStr[i]==='æ') {
            danishCharacters.push(arrStr[i])
        }
    }

    let result = {total: danishCharacters.length}
    danishCharacters.forEach(item => {
        if(result[item]) {
            result[item] +=1
            return
        }
        result[item] = 1;
    })
        return result
}

console.log(countDanishLetters(danishString));
console.log(countDanishLetters(danishString2));