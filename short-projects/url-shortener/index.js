const express = require("express");
const app = express();
const { seedUsers } = require("./mock/seed");
const {userRouter} = require("./controllers/userController");
const {urlRouter} = require("./controllers/urlController");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.text());

app.get("/", (req, res) => {
    res.json({
        msg: "Welcome to the server",
    })
});

app.use("/api/users", userRouter);
app.use("/api/urls", urlRouter);


app.use((req, res) => {
    res.status(404).send({
        msg: "Route Not Found",
    })
})

app.use((err, req, res, next) => {
    if(err instanceof  Error){
        return res.status(err.statusCode || 500).json({
            msg: err.message,
            success: false,
            error: err,
            data: {}
        })
    }

    return res.status(500).json({
        msg: err.message,
        success: false,
        error: err,
        data: {}
    })
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
    seedUsers();
})