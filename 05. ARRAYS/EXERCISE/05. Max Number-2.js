function solve(array = [], largest) {
   let resultArray = [];
   

   for (let i = 0; i < array.length; i++) {
       let isTopInt = true;
       let currentElement = array[i];
       let rightElementsArray = array.slice + 1;

       for (let j = 0; j < rightElementsArray.length; j++) {
           
            if(currentElement <= rightElementsArray[j]) {
               isTopInt = false;
               break;
            } 
       }
       if (isTopInt === true) {
           resultArray.push(currentElement)
       }
   }
   console.log(resultArray.join(' '));
}

solve([1, 4, 3, 2]);