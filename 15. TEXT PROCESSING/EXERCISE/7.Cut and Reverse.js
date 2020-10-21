function solve(string) {

    return [
        string.substring(0, (string.length)/2)
        .split('')
        .reverse()
        .join(""),
        string.substring(string.length / 2)
        .split('')
        .reverse()
        .join(""),
    ]

}

console.log(solve(

    'tluciffiDsIsihTgnizamAoSsIsihT'

));