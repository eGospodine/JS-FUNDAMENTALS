function solve(input) {

    input.shift();
    let allHeroes = {};

    for (let line of input) {
        if (line === "End") {
            break;
        }
        
        let [ command, heroName, heroPoints, manaPoints ] = line.split(' ');
        // let hp = 100;
        // let mp = 200;
        
        console.log(command, heroName, heroPoints, manaPoints);

        // switch (command) {
        //     case 'CastSpell':
        //         if(manaPoints <= mp)    

        //         break;
        //     case 'TakeDamage':
            
        //         break;
        //     case 'Recharge':
        
        //     break;
        //     case 'Heal':
        
        //     break;
        // }

    }

    



   

    
}

solve(
    [
        '2',
        'Solmyr 85 120',
        'Kyrre 99 50',
        'Heal - Solmyr - 10',
        'Recharge - Solmyr - 50',
        'TakeDamage - Kyrre - 66 - Orc',
        'CastSpell - Kyrre - 15 - ViewEarth',
        'End'
      ]
);


