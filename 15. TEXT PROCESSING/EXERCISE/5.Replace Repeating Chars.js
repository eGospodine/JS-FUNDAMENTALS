function solve(string) {

    // return string
    //     .split('')
    //     .filter((l, i, arr) => l !== arr[i +1])
    //     .join('');

    let letters = string.split('');
    let newString = '';

    for( let i = 0; i < letters.length; i++) {
        if (letters[i] !== letters[i + 1]) {
            newString += letters[i];
        }
    }

    return newString;

}

console.log(solve (

    'aaaaabbbbbcdddeeeedssaa'
    
));