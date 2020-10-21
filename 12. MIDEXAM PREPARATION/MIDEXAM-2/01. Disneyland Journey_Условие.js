function solve(input = []) {
    let journeyCost = Number(input.shift());
    let numberMonths = Number(input.shift());

    let saveMoney = 0;

    for (let i = 1; i <= numberMonths; i++) {
       
        if(i <= numberMonths && i % 3 !== 0 && i % 4 !== 0) {
            saveMoney += journeyCost * 0.25;
        }
        
        if (i % 2 !== 0 && i !== 1) {
            saveMoney -= saveMoney * 0.16;
            saveMoney += journeyCost * 0.25;
        } 
        if (i % 4 === 0) {
            saveMoney = saveMoney + (saveMoney * 0.25);
            saveMoney += journeyCost * 0.25;
        }
        
    }

    let moneySouvenirs = Math.abs(saveMoney - journeyCost);
    if(saveMoney > journeyCost) {
        console.log(`Bravo! You can go to Disneyland and you will have ${moneySouvenirs.toFixed(2)}lv. for souvenirs.`);
    } else {
        console.log(`Sorry. You need ${moneySouvenirs.toFixed(2)}lv. more.`);
    }
    
}

solve(['1000', '12']);

