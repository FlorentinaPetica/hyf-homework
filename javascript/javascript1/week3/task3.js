// Series duration of my life

const seriesDurations = [
    {
      title: "Game of thrones",
      days: 3,
      hours: 1,
      minutes: 0,
    },
    {
      title: "Sopranos",
      days: 3,
      hours: 14,
      minutes: 0,
    },
    {
      title: "The Wire",
      days: 2,
      hours: 12,
      minutes: 0,
    },
  ];

const myFavourite = seriesDurations.push({
    title: "Friends",
    days: 4,
    hours: 2,
    minutes: 20,
  },)

let timeLost = [];

function logOutSeriesText(lifeSpan = 80) {

    seriesDurations.forEach((elem, index) => {
    timeLost.push((((elem.days / 365)+(elem.hours / 8760)+(elem.minutes / 525600))/lifeSpan)*100);
    console.log(`${elem.title} took ${parseFloat(timeLost[index]).toFixed(3)} % of my life.`);
    });

    let timeLostTotal = 0;
    for (let i in timeLost) {
        timeLostTotal += timeLost[i];
    } 
    console.log(`In total that is ${parseFloat(timeLostTotal).toFixed(3)}% of my life`);
};

logOutSeriesText()