function solve(input) {
    let message = input.shift();

    for (let line of input) {
        if (line === "Done") {
            break;
        }

        let tokens = line.split(' ');
        let command = tokens[0];

        switch (command) {
            case 'TakeOdd':
                
                break;
            case 'Cut':

                break;
            case 'TakeOdd':

                break;
            case 'Substitute ':
                
                break;
        }


    }

    function cut(index, length) {
        message = message.substr(index,length);
        
    }
    console.log(message);

    
}

solve(
    [
        'Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr ',
        'TakeOdd',
        'Cut 15 3',
        'Substitute :: -',
        'Substitute | ^',
        'Done'
    ]

    
)