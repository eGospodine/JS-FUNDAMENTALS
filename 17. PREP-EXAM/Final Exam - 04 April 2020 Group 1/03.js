function solve(input) {

    // key -> citie, value -> 
   let allCities = {}

   for (let line of input) {
       if (line === "End") {
           break;
       }

       let [ city, gold, population ] = line.split('||');

       if (line === "Sail") {
           if (!allCities.hasOwnProperty(city)) {
               allCities = []
           }else {
               population += population;
           }
           
           
       }
       console.log(allCities);

    //    switch (command) {
    //        case 'Plunder':

    //        break;

    //        case 'Prosper':

    //        break;
    //    }
       
   }

   
   

    
}

solve(
    [
        'Tortuga||345000||1250',
        'Santo Domingo||240000||630',
        'Havana||410000||1100',
        'Sail',
        'Plunder=>Tortuga=>75000=>380',
        'Prosper=>Santo Domingo=>180',
        'End'
      ]
);


