function chessBoard(size, currentColor, previousColor) {
    currentColor = 'black';
    previousColor = '';

    console.log('<div class="chessboard">');

    for (let rows = 1; rows <= size; rows++) {
        console.log('<div>');

        for (let columns = 1; columns <= size; columns++) {
            console.log(`<span class="${currentColor}"></span>`);

            previousColor = currentColor;
            currentColor = previousColor === 'black' 
                ? 'white'
                : 'black'
        }

        console.log('</div>');

        if(size % 2 === 0) {
            previousColor = currentColor;
            currentColor = previousColor === 'black'
                ? 'white'
                : 'black'
        }
    }

    console.log('</div>');

}

chessBoard(12);