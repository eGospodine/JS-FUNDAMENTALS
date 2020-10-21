function solve(input) {
    input.shift();

    // let pattern = /\|([A-Z]{3,})\|:\#([A-Za-z][a-z]+\s[a-z]+)\#/g;
    let pattern = /[|]([A-Z]{3,})[|]:[#]([A-Za-z]+ [A-Za-z]+)[#]/g;

    for (let inline of input) {
        let matches = [...inline.matchAll(pattern)][0];
        
        if (matches) {
            let bossName = matches[1];
            let title = matches[2];
            let strength = bossName.length;
            let armour = title.length;

            console.log(`${bossName}, The ${title}\n>> Strength: ${strength}\n>> Armour: ${armour}`);


        } else {
            console.log(`Access denied!`);
        }
    }
}

solve(
    [
        '3',
        '|GEORGI|:#Lead architect#',
        '|Hristo|:#High Overseer#',
        '|STEFAN|:#Assistant Game Developer#'
      ]
)