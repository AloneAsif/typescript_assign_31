// Question 32q
function checkUsernames(currentUsers: any, newUsers: any) {
    for (const newUser of newUsers) {
        if (currentUsers.includes(newUser)) {
            console.log(`Username "${newUser}" is unavailable. Please enter a new username.`);
        } else {
            console.log(`Username "${newUser}" is available.`);
        }
    }
}

const currentUsers = ["John", "Admin", "Jack", "Ana", "Natalie"];
const newUsers = ["Pablo", "Donald", "Calvin", "Natalie", "Emma"];
checkUsernames(currentUsers, newUsers);
