const express = require("express");
const rateLimiter = require("./globalRateLimiter")
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const authMap = new Map();
const globalMap = new Map();

const globalRateLimiter = rateLimiter({
    windowMs: 1000*60,
    totalToken: 10,
    message: "Too many request on global code",
    mapping: globalMap
})

const authRateLimiter = rateLimiter({
    windowMs: 1000*60,
    totalToken: 5,
    message: "Too many request on authentication rate",
    mapping: authMap
})


app.use(globalRateLimiter);

app.use((req, res, next) => {
    console.log(req.url);
    next();
})

app.get("/", (req, res) => {
    return res.status(200).send("Welcome");
})

app.use("/auth", authRateLimiter, (req, res) => {
    return res.status(200).send("Welcome to Auth");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("App up on " + PORT)
})