function solve(input) {
    let allUsers = {};

    for (let line of input) {
        
        let [command, username, email] = line.split('->');
        
        
        switch (command) {
            case "Add":
                addUser(username);
                break;

            case 'Send':
                sentEmails(username, email);
                break;

            case 'Delete':
                deleteUser(username);
                break;

            case 'Statistics':
                statistics();
                break;
        }
    }

    function statistics() {
        let arr = Object.entries(allUsers);
        console.log(`Users count: ${arr.length}`);
        let command = (a, b) => b[1].sent - a[1].sent || a[0].localeCompare(b[0]);
        arr = arr.sort(command);
        arr.forEach(i => {
            console.log(`${i[0]}`);
            i[1].msgs.forEach(i => console.log(`- ${i}`));
        });
    }

    function deleteUser(username) {
        if (allUsers[username]) {
            delete allUsers[username];
        }
        else {
            console.log(`${username} not found!`);
        }
    }

    function sentEmails(username, email) {
        if (allUsers[username]) {
            allUsers[username].sent++;
            allUsers[username].msgs.push(email);
        }
    }

    function addUser(username) {
        if (!allUsers.hasOwnProperty(username)) {
            allUsers[username] = {
                sent: 0,
                msgs: []
            };
        }
        else {
            console.log(`${username} is already registered`);
        }
    }
}

solve(
    [
    'Add->Mike',
    'Add->George',
    'Send->George->Hello World',
    'Send->George->Some random test mail',
    'Send->Mike->Hello, do you want to meet up tomorrow?',
    'Send->George->It would be a pleasure',
    'Send->Mike->Another random test mail',
    'Statistics'
    ]

);


