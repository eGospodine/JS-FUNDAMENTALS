function solve(input) {

    let pattern = /\:\:([A-Z][a-z]{2,})\:\:|\*\*([A-Z][a-z]{2,})\*\*/g;
    

    for (let line of input) {
        let matches = line.match(pattern);
        
        console.log(matches);
        if (matches) {
            let patternDecimal = /\d/g;
            let matcheddecimal = [...line.match(patternDecimal)];
            let coolThresholdSum = 0;

            matcheddecimal.forEach(i => {
                coolThresholdSum *= i;
            })



            // for (let i = 0; i < matcheddecimal.length; i++) {
            //     coolThresholdSum *= matcheddecimal;
                
            // }

            
            // let asciiSymbols = [...matches] 
            //     .map(s => s.charCodeAt(0))
            //     .join(' ');
            
            //     console.log(asciiSymbols);


            // let countOfAllEmojis = matches.length;
            // console.log(`${countOfAllEmojis} emojis found in the text. The cool ones are:`);
        }
        
    }




}

solve(
    [
  'In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**'
]
    
)