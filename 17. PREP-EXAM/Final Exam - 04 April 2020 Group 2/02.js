function solve(input) {
    input.shift();
    // let pattern = /\@#+([A-Z][A-Za-z0-9]{5,})\@\#+/g;
    let pattern = /@#+([A-Z][A-Za-z0-9]{4,}[A-Z])@#+/g;
    

    for (let line of input) {
        let matches = [...line.matchAll(pattern)][0];
        
        if (matches) {
            let productGroup = matches[1]
            let digitPattern = /\d/g;
            let matchesDigit = matches[1].match(digitPattern);
            
            if(matchesDigit === null){
                console.log(`Product group: 00`);
            }else {
                let digits = [...matchesDigit].join('')
                console.log(`Product group: ${digits}`);
            }
            

        } else {
            console.log(`Invalid barcode`);
        }
       
    }
}

solve(
    [
        '6',
        '@###Val1d1teM@###',
        '@#ValidIteM@#',
        '##InvaliDiteM##',
        '@InvalidIteM@',
        '@#Invalid_IteM@#',
        '@#ValiditeM@#'
      ]
    
)