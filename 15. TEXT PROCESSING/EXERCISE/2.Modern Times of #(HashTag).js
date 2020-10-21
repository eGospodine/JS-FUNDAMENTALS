function solve (input) {

    let words = input.split(' ');
    let output = [];

    function hasOnlyLetters(word){

        word = word.toLowerCase();
        for(let i = 0; i < word.length; i++){
            if (word.charCodeAt(i) < 97 || word.charCodeAt(i) > 122) {
                return false;
            }
       }

       return true;
    }

    function isValid(word) {
        let valid = false;

        if(words.startsWith('#') && word.length > 1 && hasOnlyLetters(words.substring(1))){
            return true;
        }
        return false;
    }


    words.forEach(word => {
        if(word.startsWith('#') && word.length > 1){
            output.push(word.slice(1))
        }
    })

    return output.join(('\n'))

}

console.log(solve(

    'Nowadays everyone uses # to tag a #special word in #socialMedia'

));