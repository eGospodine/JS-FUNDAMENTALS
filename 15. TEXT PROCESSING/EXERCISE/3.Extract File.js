function solve (input) {

    let file = input.substring(input.lastIndexOf('\\') + 1 );
    let fileName = file.substring(0, file.lastIndexOf('.'));
    let ext = file.substring(file.lastIndexOf('.') + 1)


    return [`File name: ${fileName}`, `File extension: ${ext}`].join('\n');


    
}

console.log(solve(

    'C:\\Internal\\training-internal\\Template.pptx'

));