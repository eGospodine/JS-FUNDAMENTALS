function solve(input) {
    let message = input.shift();

    for (let inline of input) {
       if (command === 'Complete') {
           break;
       } 

       let tokens = line.split(' ');
       let command = tokens[0];

       switch (command) {
           case 'Make Upper':

               break;
            case 'Make Upper':
            
                break;
            case 'Make Lower':
            
                break;
            case 'GetDomain':
            
                break;
            case 'GetUsername':
            
            break;
            case 'Replace':
            
            break;
            case 'Encrypt':
            
            break;
       }
    }

    function make(type) {
        if (type === 'Make Upper') {
            message = message.toUpperCase();
        } else {
            message = message.toLowerCase();
        }
        console.log(message);
    }

    function getDomain() {

    }

    function getUsername() {

    }

    function replace(currentChar, newChar) {
        while (message.search(currentChar) !== -1){
            message = message.replace(currentChar, newChar)
        }
        console.log(message);
    }

    function encript(message) {
        message.forEach(element => {
            
        });
    }

}


solve(
        [
        'Mike123@somemail.com',
        'Make Upper',
        'GetDomain 3',
        'GetUsername',
        'Encrypt',
        'Complete'
        ]
)