function solveBonusSystem(input) {
    input = input.map(x => Number(x))

    let students = input.shift()
    let lectures = input.shift()
    let bonus = input.shift()

    let maxBonusPoints = 0
    let studentAttendances = 0

    for (let attendancy of input) {
        let bonusPoints = attendancy / lectures * (5 + bonus)

        if (bonusPoints > maxBonusPoints) {
            studentAttendances = attendancy
            maxBonusPoints = bonusPoints
        }
    }

    console.log(`Max Bonus: ${Math.ceil(maxBonusPoints)}.`);
    console.log(`The student has attended ${studentAttendances} lectures.`);
}

solveBonusSystem ([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
  ]);