function solve(array = [], rotations) {
    let resultArray = array.slice();
    resultArray.map ((element, index) => {
        
        if (index < rotations) {
            resultArray.shift();
            resultArray.push(element);
        } 
        return;
        
    });



    console.log(resultArray.join( ' ' ));
}

solve([51, 47, 32, 61, 21], 2)