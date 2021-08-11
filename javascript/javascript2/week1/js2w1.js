// find the shortest word of an array of words

const danishWords = ["bil", "plante", "kaffe", 'du', "bog", "ø", "planetarium"];

function findShortWord(danishWords) {
    let shortestWord = danishWords[0];
    danishWords.forEach(element => {
        if (element.length < shortestWord.length) {
            shortestWord = element
        }
    })
    return shortestWord;
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

//Spirit animal name generator

const spiritAnimals = ['butterfly', 'spider', 'crow', 'owl', 'hummingbird', 'hawk', 'grasshopper', 'eagle', 'squirrel', 'rabbit']

function getName() {
    return userName.value;
}

    function getSpiritualAnimal() {
    if(getName() === '' || !isNaN(getName())) {
        alert(`Please insert a valid name`)
    } else if (document.getElementById('click').selected) {
        document.getElementById('button').innerText = 'Get new result';
        document.getElementById('animal').innerHTML = `${getName()} - The ${spiritAnimals[Math.floor(Math.random() * spiritAnimals.length)]}`;
    }
}

function getSpiritualAnimalOver() {
    if(getName() === '' || !isNaN(getName())) {
        return
    } else if (document.getElementById('hoover').selected) {
        document.getElementById('button').innerText = 'Hoover for new result';
        document.getElementById('animal').innerHTML = `${getName()} - The ${spiritAnimals[Math.floor(Math.random() * spiritAnimals.length)]}`;
    }
}