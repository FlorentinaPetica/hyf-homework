console.log("Goodboy-Oldboy!") // Goodboy-Oldboy (A dog age calculator)

const dogYearOfBirth = 2017;

const dogYearOfFuture = 2027;

const inHumanYear = dogYearOfFuture - dogYearOfBirth;

const dogYear = (dogYearOfFuture - dogYearOfBirth) * 7;

let shouldShowResultInDogYears = true;

if (shouldShowResultInDogYears) {
    console.log (`Your dog will be ${dogYear} dog years old in ${dogYearOfFuture}`)
} else {
    console.log(`Your dog will be ${inHumanYear} human years old in ${dogYearOfFuture}`)
}