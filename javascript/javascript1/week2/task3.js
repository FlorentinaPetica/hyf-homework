console.log('Task3 - Weather wear') // Weather wear

function getOutsideTemperture (temperature) {
    
    const clothes = "";
    
    if (temperature > -20 && temperature <= 5) {
        return 'Wear a warm coat and pants.';
    } else if (temperature > 5 && temperature <=20) {
        return 'Wear pants and a t-shirt.';
    } else if (temperature > 20 && temperature < 35) {
        return 'Wear shorts and a t-shirt.';
    } else {
    return 'Warning extreme tempertures. Stay inside!'
    }
}

const clothesToWear = getOutsideTemperture(18);
console.log(clothesToWear);