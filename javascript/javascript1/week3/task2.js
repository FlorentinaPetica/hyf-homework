// When will we be there??

const travelInformation = {
    speed: 50,
    destinationDistance: 432,
  };
  
const travelTime = calcTravelTime(travelInformation);

function calcTravelTime(travelInformation) {
    const travelInMinutes = (travelInformation.destinationDistance / travelInformation.speed * 60);
    const h = Math.floor(travelInMinutes / 60);
    const m = Math.floor(travelInMinutes % 60);
    return `${h} hours and ${m} minutes`;
}

console.log(travelTime);