function solve(input) {
    input.shift();

    let pattern = /U\$([A-Z][a-z]{2,})U\$P\@\$(\w{5,}\d)P\@\$/g;
    let successfulRegistrationsCount = 0;

    for (let line of input) {
        let matches = [...line.matchAll(pattern)][0];
        
        if (matches) {
            let username = matches[1];
            let password = matches[2];
            successfulRegistrationsCount ++;
            
            console.log(`Registration was successful`);
            console.log(`Username: ${username}, Password: ${password}`);
        }else {
            console.log(`Invalid username or password`);
        }
    }

    console.log(`Successful registrations: ${successfulRegistrationsCount}`);

}

solve(
    [
        '3',
        'U$myU$-->P@$asdqwe123P@$',
        'Sara 1232412',
        'U$NameU$P@$Pass234P@$'
      ]
    
)