function solve(input) {
    
    let message = input.shift();

    for (let line of input) {
        if (line === 'Finish') {
            break;
        }

        let tokens = line.split(' ');
        let command = tokens[0];

        switch (command) {
            case 'Replace':
                replace(tokens[1], tokens[2]);
                break;
            case 'Cut':
                cut(Number(tokens[1]), Number(tokens[2]));
                break;
            case 'Make':
                make(tokens[1]);
                break;
            case 'Check':
                check(tokens[1]);
                break;
            case 'Sum':
                sum(Number(tokens[1]), Number(tokens[2]));
                break;
        }
       
    }

    function replace(currentChar, newChar) {
        while (message.search(currentChar) !== -1) {
            message = message.replace(currentChar, newChar);
        }
        console.log(message);
    }

    function cut (startIndex, endIndex) {
        if (indexIsValid(startIndex) && indexIsValid(endIndex)) {
            message = message.substring(0, startIndex) + message.substring(endIndex + 1);

            console.log(message);
        } else {
            console.log(`Invalid indexes!`);
        }
    }

    function make (type) {
        if (type === 'Upper') {
            message = message.toUpperCase();
        }else {
            message = message.toLowerCase();
        }

        console.log(message);
    }

    function check(string) {
        if (message.includes(string)) {
            console.log(`Message contains ${string}`);
        } else {
            console.log(`Message doesn't contain ${string}`);
        }
    }

    function sum(startIndex, endIndex) {
        if (indexIsValid(startIndex) && indexIsValid(endIndex)) {
            let sum = 0;
            let substring = message.substring(startIndex, endIndex + 1);

            for (let i = 0; i < substring.length; i++){
                let ascii = substring.charCodeAt(i);

                sum += ascii;
            }
            
            console.log(sum);
        } else {
            console.log(`Invalid indexes!`);
        }
    }

    function indexIsValid(index) {
        return index >= 0 && index < message.length;
    } 
    

}



solve(
    
    [
        'ILikeSharan',
        'Replace a e',
        'Make Upper',
        'Check SHEREN',
        'Sum 1 4',
        'Cut 1 4',
        'Finish'
      ]
          
);