function solve(input) {
    //key -> heroName, value -> spell (array);
    let allHeroes = {};

    for (let line of input) {
        if (line === "End") {
            break;
        }

        let [command, heroName, spell] = line.split(' ');
        
        switch (command) {
            case 'Enroll':
                enroll(heroName);
                break;
            case 'Learn':
                learn(heroName, spell);
                break;
                
            case 'Unlearn':
                unlearn(heroName, spell);
                break;
        }
    }

    //Sorting
    let sortedHeroes = Object.entries(allHeroes)
        .sort(sortHeroes);
        console.log(`Heroes:`);
        for (let [name, spell] of sortedHeroes) {
            
            console.log(`== ${name}: ${spell.join(', ')}`);
        }
    
    function sortHeroes(h1, h2) {
        let [ heroAName, heroASpell ] = h1;
        let [ heroBName, heroBSpell ] = h2;

        let firstCriteria = heroASpell - heroBSpell;
        if (firstCriteria === 0) {
            return heroAName.localeCompare(heroBName);
        }
        return firstCriteria;
        
    }

    function unlearn(heroName, spell) {
        if (!allHeroes.hasOwnProperty(heroName)) {
            console.log(`${heroName} doesn't exist.`);
            return;
        }
        let spellsName = allHeroes[heroName];
        if (spellsName.includes(spell)) {
            let indexOfSpell = spellsName.indexOf(spell);
            spellsName.splice(indexOfSpell, 1);
        }
        else {
            console.log(`${heroName} doesn't know ${spell}.`);
        }
    }

    function learn(heroName, spell) {
        if (!allHeroes.hasOwnProperty(heroName)) {
            console.log(`${heroName} doesn't exist.`);
            return;
        }
        
        let spellName = allHeroes[heroName];
        if (!spellName.includes(spell)) {
            spellName.push(spell);
        }
        else {
            console.log(`${heroName} has already learnt ${spell}.`);
        }
    }

    function enroll(heroName) {
        if (!allHeroes.hasOwnProperty(heroName)) {
            allHeroes[heroName] = [];
        }
        else {
            console.log(`${heroName} is already enrolled.`);
        }
    }
}

solve(
    [
        'Enroll Stefan',
        'Learn Stefan ItShouldWork',
        'Learn Stefan ItShouldWork',
        'Unlearn Stefan NotFound',
        'End'
      ]
      
)