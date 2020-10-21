function solve(input = []){
    let initialHealth = 100;
    let initialBitcoins = 0;
    let isDead = false;
    let dungeonRooms = input.shift().split('|');
    for(let i = 0; i < dungeonRooms.length; i++) {
        let tokens = dungeonRooms[i].split(' ');
        let command = tokens[0];
        let value = +tokens[1];
        if(command === 'potion' ){
            let addHealth = tokens[1];
            if(value + initialHealth <= 100){
                initialHealth += value;
                console.log(`You healed for ${value} hp.`);
                console.log(`Current health: ${initialHealth} hp.`)
            } else {
                console.log(`You healed for ${100 - initialHealth} hp.`);
                console.log(`Current health: ${initialHealth} hp.`)
            }
        } else if(command === 'chest'){
            initialBitcoins += value;
            console.log(`You found ${value} bitcoins.`);
        } else {
            initialHealth -= value;
            if(initialHealth > 0) {
                console.log(`You slayed ${command}.`)
            } else {
                console.log(`You died! Killed by ${command}.`)
                console.log(`Best room: ${i + 1}`)
                isDead = true;
                break;
            }
        }
        if(!isDead) {
            console.log(`You've made it!", "Bitcoins: ${initialBitcoins}", "Health: ${initialHealth}`)
        }
    }
}

solve(
    [ 'rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000' ]
);