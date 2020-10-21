function primeNumberChecker(num, result) {
    
    if (num === 1) {
        console.log('false');
        return;
    }
    else if (num === 2) {
        console.log('false');
        return;
    }
    else {
        for (var x = 2;x < num; x++) {
            if (num % x === 0) {
                console.log('false');
                return;
            }
        }
        console.log('true')
                
    }
}

primeNumberChecker(81);