function solve(input) {
    let students = Number(input.shift());
    let lectures = Number(input.shift());
    let addBonus = Number(input.shift());

    let maxBonusPoints = 0;
    let studentAttendances = 0;
    
    for (let attendancy of input) {
        let bonusPoints = attendancy / lectures * (5 + addBonus);

        if (bonusPoints > maxBonusPoints) {
            studentAttendances = attendancy
            maxBonusPoints = bonusPoints
        }
    }

    console.log(`Max Bonus: ${Math.ceil(maxBonusPoints)}.`);
    console.log(`The student has attended ${studentAttendances} lectures.`);
    
}

solve(
    [
        '10', '30', '14', '8',
        '23', '27', '28', '15',
        '17', '25', '26', '5',
        '18'
      ]
);