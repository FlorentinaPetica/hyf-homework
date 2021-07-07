console.log('Candy helper')

const boughtCandyPrices = [];
function addCandy (candyType, weight) {
  switch (candyType) {
    case 'sweet':
      return boughtCandyPrices.push(candyType, weight*0.5);
    case 'chocolate':
      return boughtCandyPrices.push(candyType, weight*0.7);
    case 'toffee':
      return boughtCandyPrices.push(candyType, weight*1.1);
    case 'chewing-gum':
      return boughtCandyPrices.push(candyType, weight*0.03);
      break;
  }
}

addCandy('sweet', 21);
addCandy('toffee', 40);
addCandy('chocolate', 10);
addCandy('chewing-gum', 25);
console.log(boughtCandyPrices);

const amountToSpend = Math.random() * 100;
console.log(amountToSpend);

let boughtCandy = 0;
  for (let i = 0; i < boughtCandyPrices.length; i++) {
    if (i % 2 == 0) continue;
    boughtCandy += boughtCandyPrices[i];
    console.log(boughtCandy)
  }

function canBuyMoreCandy () {
  if (boughtCandy < amountToSpend) {
    console.log('You can buy more, so please do!')
  } else {
    console.log('Enough candy for you!')
  }
}
canBuyMoreCandy();