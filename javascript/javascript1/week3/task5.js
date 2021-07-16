let activities = [];

function addActivity(activity, duration) {
    if (typeof activity === 'string' && typeof duration === 'number') {
    activities.push({'date': new Date(Date.now()).toLocaleDateString(), 'activity': activity, 'duration': duration});
    };
};

addActivity('Instagram', 20);
addActivity('Facebook', 30);
addActivity('Youtube', 10);
addActivity('Youtube', 25)
console.log(activities)

function showStatus(activities) {
    const usageLimit = 120;
    let usage = 0;
    for (const i in activities) {
        usage += activities[i].duration;
    };
    if (typeof activities[0] === 'undefined') {
        console.log('Add some activities before calling showStatus')
    } else if (usage > usageLimit) {
        console.log('You have reached your limit, no more smartphoning for you!')
    } else {
        console.log(`You have added ${activities.length} activities. They amount to ${usage} min. of usage.`);
    };

};

showStatus(activities);

function sortDuration() {
    let points = [];
    for (let i = 0; i< activities.length; i++) {
        points.push(activities[i].duration)
    }
    const maximumDuration = Math.max(...points);

    let favourites = activities.filter(favourite => favourite.duration === maximumDuration);
    console.log(`You have spent ${maximumDuration} min on ${favourites[0].activity}.`);
}

sortDuration();