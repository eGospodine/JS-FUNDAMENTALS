/*function solve(input = []) {
    let biscuitsProducedPerDay = Number(input.shift());
    let workers = Number(input.shift());
    let competingFactoryProduced = Number(input.shift());

    let factoryProduced = (workers * biscuitsProducedPerDay) * 20;
    let factoryProducedThird = ((workers * biscuitsProducedPerDay) * 0.75) * 10;
    let totalProduced = factoryProduced + factoryProducedThird;

    console.log(`You have produced ${totalProduced} biscuits for the past month.`);

    let percentage = Math.abs(((totalProduced - competingFactoryProduced) / competingFactoryProduced)  * 100);
    
    if(totalProduced >= competingFactoryProduced) {
        console.log(`You produce ${percentage.toFixed(2)} percent more biscuits.`);
    } else {
        console.log(`You produce ${percentage.toFixed(2)} percent less biscuits.`);
    }

}*/

function solve(input = []){
    let biscuitsProducedPerDay = Number(input.shift());
    let workers = Number(input.shift());
    let competingFactoryProduced = Number(input.shift());

    let totalProduced = 0;

    for(let i = 1; i <= 30; i++) {
        if (i % 3 === 0) {
            totalProduced += Math.floor((workers * biscuitsProducedPerDay) * 0.75);
        } else {
            totalProduced += workers * biscuitsProducedPerDay;
        }
    }
    console.log(`You have produced ${totalProduced} biscuits for the past month.`);

    let percentage = Math.abs((totalProduced - competingFactoryProduced)/competingFactoryProduced) * 100;

    if(totalProduced > competingFactoryProduced) {
        console.log(`You produce ${percentage.toFixed(2)} percent more biscuits.`)
    } else {
        console.log(`You produce ${percentage.toFixed(2)} percent less biscuits.`)
    }
}

solve([ '65', '12', '26000' ]);