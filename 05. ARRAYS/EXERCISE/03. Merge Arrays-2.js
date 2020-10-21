function solve(arrayOne = [], arrayTwo = []) {
    let resultArray = [];

    arrayOne.map((element, i) => {
        i % 2 === 0 
        ? resultArray.push(Number(element) + Number(arrayTwo[i])) 
        : resultArray.push(element + arrayTwo[i]);

    });
    console.log(resultArray.join(' - '));
}

solve (
    ['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']
)