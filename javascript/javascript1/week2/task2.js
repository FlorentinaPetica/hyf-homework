console.log('Task2 - Event application') // Event application

const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function getEventWeekday(numDays) {
    const today = new Date().getDay();
    const daysLeft = (today + numDays) % weekDays.length;
    return weekDays[daysLeft];
}

console.log(getEventWeekday(9));