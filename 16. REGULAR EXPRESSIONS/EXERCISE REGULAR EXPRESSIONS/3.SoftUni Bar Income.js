function solve(input) {
let income = 0;
input.forEach(line => {
    let pattern = /%([A-Z][a-z]+)%.*<(\w+)>.*\|(d+)\|\D*(\d+\.?\d+)\$/gm;
    let element = pattern.exec(line);
    if(element !== null) {
        let price = Number(element[3])*Number(element[4]);
        income += price;
        console.log(`${element[1]}: ${Number(element[2]).toFixed(2)} - ${price.toFixed(2)}`);
    }
});

return `Total income: ${income.toFixed(2)}`



}

console.log(solve(
    [
        '%George%<Croissant>|2|10.3$',
        '%Peter%<Gum>|1|1.3$',
        '%Maria%<Cola>|1|2.4$',
        'end of shift'
      ]

)