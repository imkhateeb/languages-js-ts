const {users} = require("../mock/mock-data");
const res = require("express/lib/response");

const seedUsers = () => {
    try{
        [
            {
                "id": "50dea593-01b2-4f1c-b89f-a369708042a3",
                "name": "Khateeb",
                "email": "khateeb@gmail.com",
                "password": "khateeb@gmail.com"
            },
            {
                "id": "5bb89835-7b80-45dd-b34c-bc07c9856806",
                "name": "Berlin",
                "email": "berlin@gmail.com",
                "password": "berlin@gmail.com"
            },
            {
                "id": "5d839bd1-d444-4567-bb8d-0cca0e800178",
                "name": "Alok",
                "email": "alok@gmail.com",
                "password": "alok@gmail.com"
            }
        ].forEach((user)=>users.push(user));

        console.log("Users seeded successfully!");
    }catch(e){
        console.log(e);
    }
}
module.exports = {
    seedUsers
}