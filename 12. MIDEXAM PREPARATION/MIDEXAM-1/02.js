function solve(input = []) {
    input.pop();

    let weapons = input.shift().split('|');

    const moveLeft = (index) => {
        let tempIndex = Number(index - 1);

        if(index >= 0 && index < weapons.length && tempIndex >= 0) {
            let temp = weapons[tempIndex];
            weapons[tempIndex] = weapons[index];
            weapons[index] = temp;
        }
    }

    const moveRight = (index) => {
        let tempIndex = Number(index + 1);

        if(index >= 0 && index < weapons.length && tempIndex < weapons.length) {
            let temp = weapons[tempIndex];
            weapons[tempIndex] = weapons[index];
            weapons[index] = temp;
        }
    }

    const checkEven = () => {
        let output = '';

        for(let i = 0; i < weapons.length; i += 2){
            output += `${weapons[i]} `;
        }
        console.log(output.trim());
    }

    const checkOdd = () => {
        let output = '';

        for(let i = 1; i < weapons.length; i += 2){
            output += `${weapons[i]} `;
        }
        console.log(output.trim());
    }

    for(const line of input) {
        let tokens = line.split(' ');
        let command = `${tokens[0]} ${tokens[1]}`;

        if(command === 'Move Left') {
            moveLeft(Number(tokens[2]));
        } else if (command === 'Move Right') {
            moveRight(Number(tokens[2]));
        } else if (command === 'Check Even') {
            checkEven();
        } else if (command === 'Check Odd') {
            checkOdd();
        }
    }

    console.log(`You crafted ${weapons.join('')}!`)



}

solve([
    'ha|Do|mm|om|er',
    'Move Right 0',
    'Move Left 3',
    'Check Odd',
    'Move Left 2',
    'Move Left 10',
    'Move Left 0',
    'Done'
  ]);