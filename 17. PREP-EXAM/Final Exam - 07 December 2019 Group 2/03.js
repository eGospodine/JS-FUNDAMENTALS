function solve(input) {
    let allGuests = {}
    let unlikedMeals = 0;

    for (let line of input) {
        if (line === 'Stop') {
            break;
        }

        //Destructuring
        let [ command, guest, meal ] = line.split('-');

        if (command === 'Like') {
            like(guest, meal);
        } else {
            unlike(guest, meal);
        }
    }

    //Sorting
    let sortedGuests = Object.entries(allGuests)
        .sort(sortGuests)
    
    for (let [name, meals] of sortedGuests) {
        console.log(`${name}: ${meals.join(', ')}`)
    }
    console.log(`Unliked meals: ${unlikedMeals}`);

    function sortGuests(g1, g2) {
        let [ guestAName, guestAMeals ] = g1;
        let [ guestBName, guestBMeals ] = g2;

        let firstCriteria = guestBMeals.length - guestAMeals.length;

        if (firstCriteria === 0) {
            return guestAName.localeCompare(guestBName);
        } else {

        }
    }

    function unlike(guest, meal) {
        if (!allGuests.hasOwnProperty(guest)) {
            console.log(`${guest} is not at the party.`);
            return;
        }
    
        let likedMeals = allGuests[guest];
        if (likedMeals.includes(meal)) {
            let indexOfMeal = likedMeals.indexOf(meal);
            likedMeals.splice(indexOfMeal, 1);
            unlikedMeals++;
            console.log(`${guest} doesn't like the ${meal}.`);
        }else {
            console.log(`${guest} doesn't have the ${meal} in his/her collection.`);
        }
    }

    function like(guest, meal) {
        if (!allGuests.hasOwnProperty(guest)) {
            allGuests[guest] = [];
        }
        let likedMeals = allGuests[guest];
        if (!likedMeals.includes(meal)) {
            likedMeals.push(meal);
        }
    }
}

solve (
    [
        'Like-Mike-frenchFries',
        'Like-Mike-salad',
        'Like-George-fruit',
        'Like-Steven-salad',
        'Unlike-Steven-salad',
        'Unlike-Steven-fruit',
        'Stop'
      ]
)