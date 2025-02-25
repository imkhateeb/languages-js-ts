const userRouter = require("express").Router();
const {users} = require("../mock/mock-data");
const {v4 : uuidv4} = require("uuid");


userRouter
    .route("/")
    .get((req, res) => {
        res.status(200).send({
            data: users,
            error: {},
            msg: "User fetched successfully",
            success: true,
        })
    })
    .post((req, res, next) => {
        const {name, email, password} = req.body;
        try{
            if(!name || !email || !password) {
                throw new Error("Name, Email and password are required");
            }
            const user = users.find((user) => user.email === email);
            if(user) {
                throw new Error("User exists already!");
            }
            const data = {
                name,
                email,
                password,
                id: uuidv4()
            }
            users.push(data)
            return res.status(200).send({
                data,
                msg: "User created successfully",
                success: true,
                error: {}
            })
        }catch(err){
            next(err);
        }

    })

userRouter
    .route("/:id")
    .get((req, res, next) => {
        try {
            if(!req.params.id){
                throw new Error("User Id Not Found!");
            }
            const user = users.find((user) => user.id === req.params.id);
            if(!user){
                throw new Error("User Not Found!");
            }
            return res.status(200).send({
                data: user,
                msg: "User found successfully",
                success: true,
                error: {}
            })
        }catch(err) {
            next(err);
        }
    })


 module.exports = {userRouter};