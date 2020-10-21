function calculator (a, operator, b) {
    let result = 0;

    switch(operator) {
        case '+':
            result = a + b;
            break;
        
        case '-':
            result = a - b;
            break;
        
        case '*':
            result = a * b;
            break;
        
        case '/':
            result = a / b;
            break;

        case '%':
            result = a % b;
            break;

        default:
            console.log('Invalid operator')
    }
    console.log(result.toFixed(2));
}

calculator(5,'+', 10);