function solve() {
    let wagons = input.shift().split(" ").map(function((x) => Number(x));
    let maxCap = Number(input.shift());

    for(let i=0; i < input.length; i++) {
        let command = input[i].split(" ");

        if(command.length === 2){
            wagons.push(+command[1]);

        } else if (command.length === 1) {
            let passengersToAdd = Number(command[0]);
            
            for(let j=0; j < input.length; j++){
                if(passengersToAdd + wagons[j] <= maxCap){
                    wagons[j] += passengersToAdd;
                    break;
                }
            }
        }
    }

    return wagons.join(" ");


}

console.log(
solve (
    ['0 0 0 10 2 4',
    '10',
    'Add 10',
    '10',
    '10',
    '10',
    '8',
    '6']
    
)
);