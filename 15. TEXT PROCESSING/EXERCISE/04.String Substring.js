function solve (key, string) {
    key = key.toLowerCase();
    string = string.toLowerCase();

    let words = string.split(' ');

    return words.includes(key) ? key : `${key} not found!`


}

console.log(solve(

    'javascript',
    'JavaScript is the best programming language'



));