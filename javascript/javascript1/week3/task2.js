// When will we be there??

const travelInformation = {
    speed: 50,
    destinationDistance: 432,
  };
  
const travelTime = calcTravelTime(travelInformation);

function calcTravelTime(travelInformation) {
    const travelInMinutes = (travelInformation.destinationDistance / travelInformation.speed * 60);
    const hours = Math.floor(travelInMinutes / 60);
    const minutes = Math.floor(travelInMinutes % 60);
    return `${hours} hours and ${minutes} minutes`;
}

console.log(travelTime);