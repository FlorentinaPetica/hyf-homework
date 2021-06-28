console.log('Housey pricey!') // Housey pricey (A house price estimator)

let peter = {
    houseWidth: 8,
    houseDepth: 10,
    houseHight: 10,
    gardenSizeInM2: 100,
    houseCost: 2500000
}

let volumeInMetersPeter = peter.houseWidth * peter.houseDepth * peter.houseHight;

let housePricePeter = volumeInMetersPeter * 2.5 * 1000 + peter.gardenSizeInM2 * 300;

if (housePricePeter < peter.houseCost) {
    console.log('Peter pays more than the market value of the house.')
} else {
    console.log('Peter pays less than the market value of the house.')
}

let julia = {
    houseWidth: 5,
    houseDepth: 11,
    houseHight: 8,
    gardenSizeInM2: 70,
    houseCost: 1000000
}

let volumeInMetersJulia = julia.houseWidth * julia.houseDepth * julia.houseHight;

let housePriceJulia = volumeInMetersJulia * 2.5 * 1000 + julia.gardenSizeInM2 * 300;

if (housePriceJulia < julia.houseCost) {
    console.log('Julia pays more than the market value of the house.')
} else {
    console.log('Julia pays less than the market value of the house.')
}