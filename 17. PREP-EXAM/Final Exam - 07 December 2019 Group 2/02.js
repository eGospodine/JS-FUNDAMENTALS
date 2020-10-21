function solve(input) {
    input.shift();
    let pattern = /^!([A-Z][a-z]{2,})!:\[([A-Za-z]{8,})\]$/g;

    for (let line of input) {
        let matches = [...line.matchAll(pattern)][0];
        
        if (matches) {
            let command = matches[1];
            let message = matches[2];
            let asciiSymbols = [...message] 
                .map(s => s.charCodeAt(0))
                .join(' ');
                
            console.log(`${command}: ${asciiSymbols}`);
        } else {
            console.log('The message is invalid');
        }
    }
}




solve (

    [ '2', '!Send!:[IvanisHere]', '*Time@:[Itis5amAlready]' ]

    );
