const {users, urls} = require("../mock/mock-data");
const urlRouter = require("express").Router();
const {v4 : uuidv4} = require("uuid");


urlRouter
    .route("/click")
    .get((req, res, next) => {
        const userIp = req.ip;
        const shortId = req.query.shortId;

        try{

            if(!shortId){
                throw new Error(`Short ID is required.`);
            }

            const url = urls.find((url) => url.shortId === shortId);

            if(!url){
                throw new Error(`${shortId} is not a valid URL`);
            }

            url.ips.push(userIp);
            url.clicks = url.clicks + 1;

            res.redirect(url.url)

        }catch (error){
            next(error)
        }


    })

urlRouter
    .route("/url")
    .get((req, res, next) => {
        const urlId = req.query.urlId;
        try{
            if(!urlId){
                throw  new Error("URL Id is required.");
            }

            console.log(urls);

            const url = urls.find((url) => url.id === urlId);
            if(!url){
                throw new Error("No url found with id "+urlId);
            }

            return res.status(200).json({
                success: true,
                data: url,
                error: {},
                msg: "success",
            })
        }catch(err){
            next(err);
        }
    })

urlRouter
    .route("/")
    .post((req, res, next) => {
        const userId = req.query.userId;
        try{
            if(!userId){
                throw new Error("No user found with id "+userId);
            }
            const user = users.find((user) => user.id === userId);
            if(!user){
                throw new Error("No user found with id "+userId);
            }
            const {url} = req.body;
            if(!url){
                throw new Error("No url found with id "+url);
            }
            const data = {
                id: uuidv4(),
                url: url,
                userId,
                shortId: uuidv4()?.split("-")[0],
                clicks: 0,
                ips: []
            }
            urls.push(data);
            res.status(200).json({
                success: true,
                data,
                error: {},
                msg: "success",
            });
        }catch(err){
            next(err);
        }
    })
    .get((req, res, next) => {
        const userId = req.query.userId;
        try{
            if(!userId){
                throw  new Error("No user found with id "+userId);
            }

            const data = urls.filter((url) => url.userId === userId);

            return res.status(200).json({
                success: true,
                data,
                error: {},
                msg: "success",
            })
        }catch(err){
            next(err);
        }
    })




module.exports = {
    urlRouter
}