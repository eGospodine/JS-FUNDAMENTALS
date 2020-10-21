function solve(string){

    let capitalIndex = -1;
    let output = [];

    
    for (let i = 0; i < string.length; i++) {
        const element = string[i];
        const letter = string[i];
        if (letter.toLowerCase() !== letter && i !== 0) {
            let word = string.substring(capitalIndex, i);
            capitalIndex = i;
            output.push(word)
        }
    }

    output.push(string.substring(capitalIndex))

    return output.join(', ')

}

console.log(solve(

    'SplitMeIfYouCanHaHaYouCantOrYouCan'

));