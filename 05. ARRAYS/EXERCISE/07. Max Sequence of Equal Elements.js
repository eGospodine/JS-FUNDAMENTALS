function solve (array = []) {

    let startIndex = 0;
    let longerLength = 1;
    let counter = 0;

    for (let i = 1; i < array.length; i++) {
       
        if (array[i] === array[i - 1]) {
            counter++;

                startIndex = i - counter + 1;
                longerLength = counter;
            
        } else {
            counter = 1;
        }
    }

    for (let i = startIndex; i < startIndex + longerLength; i++) {
        
        console.log(array.join(' '));
        
    }

}

solve ([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);